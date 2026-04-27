"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, ContactShadows, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";

// High-Fidelity Car Model
// Loads a realistic car model for a premium automotive experience
function ShowroomCar() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/car.glb");

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05; // elegantly slow rotation
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.1}>
        <primitive 
          object={scene} 
          scale={1.4} 
          position={[0, -0.2, 0]} 
          rotation={[0, Math.PI / 1.5, 0]} 
        />
      </Float>
    </group>
  );
}

// Prefetch the model for better performance
useGLTF.preload("/models/car.glb");

export function Hero3D() {
  return (
    <>
      <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none md:hidden">
        <Image
          src="/images/hero_car_cinematic_1776255790678.png?v=4"
          alt="Luxury performance vehicle"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85 hero-img-mobile"
        />
        <style>{`
          @keyframes slowScale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .hero-img-mobile { animation: slowScale 25s ease-in-out infinite; }
        `}</style>
      </div>

      <div className="absolute inset-0 z-0 bg-background pointer-events-auto cursor-grab active:cursor-grabbing hidden md:block">
        <Canvas
          shadows
          dpr={[1, 2]} // Support retina displays
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, powerPreference: "high-performance" }}
        >
          <PerspectiveCamera makeDefault position={[5.5, 2.5, 8]} fov={35} />
          <color attach="background" args={["#050505"]} />

          <ambientLight intensity={1.0} />
          {/* Key light — dramatic top-front */}
          <spotLight position={[5, 12, 6]} intensity={25} angle={0.3} penumbra={1} castShadow shadow-bias={-0.0001} />
          {/* Rim light — blue accent from rear left */}
          <spotLight position={[-8, 6, -8]} intensity={15} angle={0.5} color="#2563eb" />
          {/* Fill light from front right */}
          <spotLight position={[8, 3, 8]} intensity={10} angle={0.5} color="#ffffff" />

          <Suspense fallback={null}>
            <ShowroomCar />
            <Environment preset="night" />
          </Suspense>

          <ContactShadows resolution={1024} scale={20} blur={2.5} opacity={1} far={6} color="#000000" />

          <OrbitControls
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            enableZoom={false} // CRITICAL FIX: prev implementation hijacked page scroll
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2 - 0.05}
            autoRotate={false}
            makeDefault
          />
        </Canvas>

        {/* Interaction tooltip styled for premium feel */}
        <div className="absolute bottom-10 right-10 text-[10px] text-white/50 font-mono uppercase tracking-widest select-none pointer-events-none flex items-center gap-2 drop-shadow-md hidden lg:flex">
          <span className="w-8 h-[1px] bg-accent/40" />
          Drag to rotate
        </div>
      </div>
    </>
  );
}
