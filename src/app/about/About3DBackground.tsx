'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function ParticleConstellation() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate 120 floating agency network nodes in 3D space
  const { positions, linePositions } = useMemo(() => {
    const coords: THREE.Vector3[] = [];
    const count = 90;
    const radius = 3.2;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = radius * Math.sin(phi) * Math.cos(theta) + (Math.random() - 0.5) * 0.4;
      const y = radius * Math.cos(phi) + (Math.random() - 0.5) * 0.4;
      const z = radius * Math.sin(phi) * Math.sin(theta) + (Math.random() - 0.5) * 0.4;
      coords.push(new THREE.Vector3(x, y, z));
    }

    const posArray: number[] = [];
    coords.forEach((c) => posArray.push(c.x, c.y, c.z));

    const lineArray: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = coords[i].distanceTo(coords[j]);
        if (dist < 1.6) {
          lineArray.push(coords[i].x, coords[i].y, coords[i].z);
          lineArray.push(coords[j].x, coords[j].y, coords[j].z);
        }
      }
    }

    return {
      positions: new Float32Array(posArray),
      linePositions: new Float32Array(lineArray),
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.08;
      pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.15;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = time * 0.08;
      linesRef.current.rotation.x = Math.sin(time * 0.05) * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Network Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#FF6A00"
          size={0.065}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>

      {/* Network Connections */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#FF6A00"
          transparent
          opacity={0.18}
        />
      </lineSegments>
    </group>
  );
}

export default function About3DBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.8,
      }}
      aria-hidden="true"
    >
      <Canvas style={{ background: 'transparent' }} gl={{ alpha: true, antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6.0]} fov={45} />
        <ambientLight intensity={1.5} />
        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.4}>
          <ParticleConstellation />
        </Float>
      </Canvas>
    </div>
  );
}
