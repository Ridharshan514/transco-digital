'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function PixelEarth() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/pixel_earth.glb');

  // Auto-centre: compute bounding box and shift model to world origin,
  // then nudge it right so it fills the right portion of the canvas
  useEffect(() => {
    if (!groupRef.current) return;
    const box = new THREE.Box3().setFromObject(groupRef.current);
    const centre = new THREE.Vector3();
    box.getCenter(centre);
    // Centre first, then offset right so globe sits towards the right edge
    groupRef.current.position.set(-centre.x + 1.1, -centre.y, -centre.z);
  }, [scene]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.28;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.35} />
    </group>
  );
}

useGLTF.preload('/pixel_earth.glb');

export default function Hero3DBackground() {
  return (
    <Canvas
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 6.5], fov: 44, near: 0.1, far: 100 }}
    >
      {/* Bright lighting so low-poly colours are vivid on white */}
      <ambientLight intensity={3.5} />
      <directionalLight position={[4, 6, 4]}  intensity={1.2} />
      <directionalLight position={[-4, -2, 3]} intensity={0.6} />
      <PixelEarth />
    </Canvas>
  );
}
