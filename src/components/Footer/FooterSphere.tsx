'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function GlowSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#1a1f1c"
          emissive="#FF6A00"
          emissiveIntensity={0.08}
          distort={0.35}
          speed={1.5}
          roughness={0.6}
          metalness={0.4}
        />
      </Sphere>
      {/* Inner glow sphere */}
      <Sphere args={[1.05, 32, 32]}>
        <meshBasicMaterial color="#FF6A00" transparent opacity={0.03} side={THREE.BackSide} />
      </Sphere>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#FF6A00" />
      <pointLight position={[-3, -2, -2]} intensity={0.5} color="#ffffff" />
      <pointLight position={[0, -4, 2]} intensity={0.3} color="#FF6A00" />
    </>
  );
}

export default function FooterSphere() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Lights />
          <GlowSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
