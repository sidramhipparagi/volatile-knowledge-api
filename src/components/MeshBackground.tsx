import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const GridMesh = () => {
  return (
    <mesh rotation={[-Math.PI / 3, 0, 0]}>
      <planeGeometry args={[40, 40, 40, 40]} />
      <meshBasicMaterial color="#e5e7eb" wireframe={true} />
    </mesh>
  );
};

export const MeshBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <GridMesh />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
