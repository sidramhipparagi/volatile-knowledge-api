import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const RotatingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Rotate like a clock hand - smooth rotation
      meshRef.current.rotation.y = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial
        color="#fe300b"
        transparent
        opacity={0.6}
        roughness={0.1}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
};

export const RotatingOrb = () => {
  return (
    <div className="w-full h-[400px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#fe300b" />
        <RotatingSphere />
      </Canvas>
    </div>
  );
};