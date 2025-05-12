'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Artwork {
  id: number;
  title: string;
  image: string;
  position: [number, number, number];
  rotation: [number, number, number];
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Abstract Harmony',
    image: 'https://picsum.photos/800/800?random=1',
    position: [-3, 1.3, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 2,
    title: 'Eternal Flow',
    image: 'https://picsum.photos/800/800?random=2',
    position: [0, 1.3, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 3,
    title: 'Cosmic Dance',
    image: 'https://picsum.photos/800/800?random=3',
    position: [3, 1.3, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 4,
    title: 'Urban Dreams',
    image: 'https://picsum.photos/800/800?random=4',
    position: [-3, -1.3, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 5,
    title: 'Natural Essence',
    image: 'https://picsum.photos/800/800?random=5',
    position: [0, -1.3, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 6,
    title: 'Digital Soul',
    image: 'https://picsum.photos/800/800?random=6',
    position: [3, -1.3, 0],
    rotation: [0, 0, 0]
  }
];

function useArtworkTexture(imageUrl: string) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTexture = async () => {
      try {
        setLoading(true);
        setError(false);
        
        // Create a new texture loader
        const textureLoader = new THREE.TextureLoader();
        
        // Set crossOrigin to anonymous to avoid CORS issues
        textureLoader.crossOrigin = 'anonymous';
        
        const loadedTexture = await new Promise<THREE.Texture>((resolve, reject) => {
          textureLoader.load(
            imageUrl,
            (texture) => {
              // Configure texture settings
              texture.minFilter = THREE.LinearFilter;
              texture.magFilter = THREE.LinearFilter;
              texture.colorSpace = THREE.SRGBColorSpace;
              resolve(texture);
            },
            undefined,
            (error) => {
              console.error('Error loading texture:', error);
              reject(error);
            }
          );
        });
        
        setTexture(loadedTexture);
        setLoading(false);
      } catch (err) {
        console.error('Error loading texture:', err);
        setError(true);
        setLoading(false);
      }
    };

    loadTexture();
  }, [imageUrl]);

  return { texture, error, loading };
}

function ArtworkFrame({ artwork }: { artwork: Artwork }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { texture, error, loading } = useArtworkTexture(artwork.image);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = hovered
        ? Math.sin(state.clock.elapsedTime) * 0.1
        : 0;
    }
  });

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <meshStandardMaterial
            color="#190B28"
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
          />
          <Html
            position={[0, 0, 0.1]}
            center
            style={{
              color: '#ADBDFF',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              transform: 'translate3d(-50%, -50%, 0)',
            }}
          >
            <div className="animate-pulse">Loading...</div>
          </Html>
        </>
      );
    }

    if (error) {
      return (
        <>
          <meshStandardMaterial
            color="#ADBDFF"
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
          />
          <Html
            position={[0, 0, 0.1]}
            center
            style={{
              color: '#ADBDFF',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              transform: 'translate3d(-50%, -50%, 0)',
            }}
          >
            <div>Failed to load image</div>
          </Html>
        </>
      );
    }

    return (
      <group>
        <mesh
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry args={[2.0, 2.0]} />
          <meshStandardMaterial
            map={texture}
            transparent
            opacity={hovered ? 1 : 0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
        {hovered && (
          <Html
            position={[0, -1, 0]}
            center
            style={{
              background: 'rgba(25, 11, 40, 0.9)',
              padding: '1rem',
              borderRadius: '0.5rem',
              color: '#ADBDFF',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              transform: 'translate3d(-50%, -50%, 0)',
              backdropFilter: 'blur(4px)',
              minWidth: '200px',
            }}
          >
            <h3 className="text-lg font-semibold mb-1">{artwork.title}</h3>
            <p className="text-sm opacity-80 mb-2">Click to view details</p>
            <div className="text-xs opacity-60">
              <p>Press 'R' to reset view</p>
              <p>Use arrow keys to navigate</p>
            </div>
          </Html>
        )}
      </group>
    );
  };

  return (
    <mesh
      ref={meshRef}
      position={artwork.position}
      rotation={artwork.rotation}
    >
      <planeGeometry args={[2.0, 2.0]} />
      {renderContent()}
    </mesh>
  );
}

function Room() {
  const roomRef = useRef<THREE.Group>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

  // Calculate centroid of artwork positions
  const center = artworks.reduce(
    (acc, art) => {
      acc[0] += art.position[0];
      acc[1] += art.position[1];
      acc[2] += art.position[2];
      return acc;
    },
    [0, 0, 0]
  ).map((sum) => sum / artworks.length);

  useFrame((state) => {
    if (roomRef.current) {
      roomRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={roomRef} position={center.map((v) => -v) as [number, number, number]}>
      {/* Removed the room wall mesh for a cleaner look */}
      {/* Artworks */}
      {artworks.map((artwork) => (
        <ArtworkFrame key={artwork.id} artwork={artwork} />
      ))}
    </group>
  );
}

export default function InteractiveGallery() {
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const controlsRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!controlsRef.current) return;

      const rotationSpeed = 0.1;
      const controls = controlsRef.current;

      // Prevent default behavior for arrow keys
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowLeft':
          controls.setAzimuthalAngle(controls.getAzimuthalAngle() + rotationSpeed);
          break;
        case 'ArrowRight':
          controls.setAzimuthalAngle(controls.getAzimuthalAngle() - rotationSpeed);
          break;
        case 'ArrowUp':
          const currentPolar = controls.getPolarAngle();
          const newPolar = Math.min(Math.PI / 2, currentPolar + rotationSpeed);
          controls.setPolarAngle(newPolar);
          break;
        case 'ArrowDown':
          const currentPolarDown = controls.getPolarAngle();
          const newPolarDown = Math.max(Math.PI / 6, currentPolarDown - rotationSpeed);
          controls.setPolarAngle(newPolarDown);
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          resetView();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    // Add event listener with capture to ensure it runs before other handlers
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, []);

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      controlsRef.current.setAzimuthalAngle(0);
      controlsRef.current.setPolarAngle(Math.PI / 3);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative h-[600px] w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true }}
        style={{ background: '#1a1530' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
          screenSpacePanning={false}
          minDistance={4}
          maxDistance={6}
          target={[0, 0, 0]}
          makeDefault
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <Room />
      </Canvas>
      {showControls && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#190B28]/80 text-[#ADBDFF] px-4 py-2 rounded-full backdrop-blur-sm">
          <p className="text-sm">Use arrow keys to navigate • Press 'R' to reset • Press 'F' for fullscreen</p>
        </div>
      )}
    </div>
  );
} 