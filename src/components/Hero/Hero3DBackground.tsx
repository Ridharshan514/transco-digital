'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function GlobeModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/globe.glb');

  // Auto-normalize size and center directly inside the black box container
  useEffect(() => {
    if (!groupRef.current) return;
    
    // Reset scale & position before measuring
    groupRef.current.scale.set(1, 1, 1);
    groupRef.current.position.set(0, 0, 0);

    const box = new THREE.Box3().setFromObject(groupRef.current);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);

    const targetDiameter = 3.6;
    const scaleFactor = targetDiameter / (maxDim || 1);
    groupRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // Re-center perfectly inside box
    const scaledBox = new THREE.Box3().setFromObject(groupRef.current);
    const centre = new THREE.Vector3();
    scaledBox.getCenter(centre);
    groupRef.current.position.set(-centre.x, -centre.y, -centre.z);
  }, [scene]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/globe.glb');

export default function Hero3DBackground() {
  return (
    <Canvas
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 6.0], fov: 42, near: 0.1, far: 100 }}
    >
      {/* Dynamic lighting for high-contrast visibility against black box */}
      <ambientLight intensity={3.8} />
      <directionalLight position={[5, 6, 5]} intensity={1.8} />
      <directionalLight position={[-5, -3, 3]} intensity={0.9} />

      <GlobeModel />
    </Canvas>
  );
}
