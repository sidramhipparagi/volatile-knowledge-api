import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const GridMesh = () => {
  return (
    <mesh rotation={[Math.PI / 4, 0, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshBasicMaterial color="#e5e7eb" wireframe={true} />
    </mesh>
  );
};

export const MeshBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <GridMesh />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
