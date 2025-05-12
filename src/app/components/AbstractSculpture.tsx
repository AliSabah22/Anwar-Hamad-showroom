'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 2000;
  
  // Create particle positions
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      // Update particle positions
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] += Math.sin(state.clock.elapsedTime * 0.1 + i) * 0.01;
        positions[i3 + 1] += Math.cos(state.clock.elapsedTime * 0.1 + i) * 0.01;
        positions[i3 + 2] += Math.sin(state.clock.elapsedTime * 0.05 + i) * 0.01;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ADBDFF"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function AbstractSculpture({ className = 'fixed inset-0 pointer-events-none' }) {
  return (
    <div className={`${className} z-0`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          antialias: true,
          alpha: true,
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          rotateSpeed={0.2}
        />
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
} 