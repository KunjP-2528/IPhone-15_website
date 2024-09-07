import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';

const MovingSphere = () => {
  const sphereRef = useRef();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const animate = () => {
      if (sphereRef.current) {
        setTime(prevTime => prevTime + 0.01); // Increment time
        const radius = 2;
        sphereRef.current.position.x = radius * Math.cos(time);
        sphereRef.current.position.z = radius * Math.sin(time);
        sphereRef.current.position.y = Math.sin(time) * 0.5; // Adding vertical movement
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [time]);

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="royalblue" emissive="lightblue" emissiveIntensity={0.5} />
    </mesh>
  );
};

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="w-[15vw] h-[15vw]">
          <Canvas>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <MovingSphere />
            <OrbitControls />
          </Canvas>
        </div>
        <p className="mt-4 text-white text-xl font-bold text-shadow-lg animate-pulse">
          Loading...
        </p>
      </div>
    </Html>
  );
};

export default Loader;
