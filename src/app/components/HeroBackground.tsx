import { Canvas } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Points as ThreePoints } from 'three';

function PointsSphere() {
  const ref = useRef<ThreePoints>(null);
  
  // Use useMemo to ensure points are only generated once and are valid
  const points = useMemo(() => {
    const temp = new Float32Array(5000 * 3);
    random.inSphere(temp, { radius: 1.5 });
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ADBDFF"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function HeroBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <PointsSphere />
    </Canvas>
  );
} 