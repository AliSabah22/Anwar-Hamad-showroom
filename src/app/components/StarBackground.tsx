'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { random } from 'maath';

interface StarBackgroundProps {
  className?: string;
  count?: number;
  speed?: number;
  size?: number;
  color?: string;
  opacity?: number;
  radius?: number;
}

function Stars({ 
  count = 5000, 
  speed = 0.5, 
  size = 0.1, 
  color = '#ADBDFF',
  opacity = 0.8,
  radius = 5
}: StarBackgroundProps) {
  const points = useMemo(() => {
    const points = new Float32Array(count * 3);
    random.inSphere(points, { radius: radius * 2 }); // Wider spread for dust effect
    return points;
  }, [count, radius]);

  const ref = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const velocities = useMemo(() => {
    const vels = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      vels[i] = (Math.random() - 0.5) * 0.01; // Very small random velocities
    }
    return vels;
  }, [count]);

  // Create dust-like texture
  const starTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    if (!context) return null;

    // Create a softer, more diffused gradient for dust particles
    const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    context.fillStyle = gradient;
    context.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Track mouse movement
  useMemo(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime * 0.05; // Very slow base movement
      
      // Update positions for flowing dust effect
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Add gentle wave motion
        const waveX = Math.sin(time + i * 0.1) * 0.1;
        const waveY = Math.cos(time + i * 0.1) * 0.1;
        const waveZ = Math.sin(time * 0.5 + i * 0.05) * 0.1;

        // Update positions with velocities and waves
        positions[i3] += velocities[i3] + waveX;
        positions[i3 + 1] += velocities[i3 + 1] + waveY;
        positions[i3 + 2] += velocities[i3 + 2] + waveZ;

        // Boundary check and wrap around
        const maxRadius = radius * 2;
        for (let j = 0; j < 3; j++) {
          if (Math.abs(positions[i3 + j]) > maxRadius) {
            positions[i3 + j] = -Math.sign(positions[i3 + j]) * maxRadius;
          }
        }
      }

      ref.current.geometry.attributes.position.needsUpdate = true;

      // Very subtle mouse interaction
      const targetRotationX = mouse.current.y * 0.02;
      const targetRotationY = mouse.current.x * 0.02;

      ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.01;
      ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size * 0.5} // Smaller particles for dust effect
        color={color}
        transparent
        opacity={opacity * 0.6} // More transparent for ethereal look
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        map={starTexture}
        alphaTest={0.1}
      />
    </points>
  );
}

export default function StarBackground({ 
  className = 'fixed inset-0 pointer-events-none', 
  count = 5000,
  speed = 0.5,
  size = 0.1,
  color = '#ADBDFF',
  opacity = 0.8,
  radius = 5
}: StarBackgroundProps) {
  return (
    <div className={`${className} z-0`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Stars 
          count={count} 
          speed={speed} 
          size={size} 
          color={color}
          opacity={opacity}
          radius={radius}
        />
      </Canvas>
    </div>
  );
} 