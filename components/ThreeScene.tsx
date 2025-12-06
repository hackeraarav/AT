import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Extend JSX.IntrinsicElements to include React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      lineSegments: any;
      edgesGeometry: any;
      lineBasicMaterial: any;
      octahedronGeometry: any;
      meshBasicMaterial: any;
      ambientLight: any;
      pointLight: any;
      fog: any;
    }
  }
}

const GeometricCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      // Slow, hypnotic rotation
      meshRef.current.rotation.x = Math.cos(t / 4) / 2;
      meshRef.current.rotation.y = Math.sin(t / 4) / 2;
      meshRef.current.rotation.z = Math.sin(t / 1.5) / 2;
      
      // Gentle pulsing scale
      const scale = 1 + Math.sin(t) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial
          color="#2a0a0a"
          wireframe
          transparent
          opacity={0.3}
          roughness={0}
          metalness={1}
        />
        <lineSegments>
            <edgesGeometry args={[new THREE.IcosahedronGeometry(2.5, 0)]} />
            <lineBasicMaterial color="#550000" transparent opacity={0.4} />
        </lineSegments>
      </mesh>
      {/* Inner glowing core - Green to match text */}
      <mesh>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#4ade80" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
};

const Particles = () => {
   const ref = useRef<THREE.Points>(null);
   useFrame((state) => {
     if (ref.current) {
        ref.current.rotation.y += 0.0005;
        ref.current.rotation.x -= 0.0002;
     }
   })
   return (
       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
   )
}

const ThreeScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-deep">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4ade80" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff0000" />
        
        <GeometricCore />
        <Particles />
        
        {/* Deep Red Fog to match background */}
        <fog attach="fog" args={['#1a0505', 5, 20]} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep/20 to-deep pointer-events-none" />
    </div>
  );
};

export default ThreeScene;