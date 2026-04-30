"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, ContactShadows, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
import Image from "next/image";

// High-Fidelity Car Model
// Loads a realistic car model for a premium automotive experience
function ShowroomCar() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/car.glb");

  // Apply "Pearl White" finish to the car body for high contrast
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        
        // Target body panels based on material names or properties
        // This makes the car "pop" against the obsidian background
        if (mesh.name.toLowerCase().includes("body") || 
            mesh.name.toLowerCase().includes("paint") || 
            mat.name.toLowerCase().includes("paint")) {
          mesh.material = new THREE.MeshPhysicalMaterial({
            color: "#ffffff",
            metalness: 0.8,
            roughness: 0.15,
            clearcoat: 1.0,
            clearcoatRoughness: 0.03,
            reflectivity: 1.0,
          });
        }
      }
    });
  }, [scene]);

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
      {/* Mobile Fallback - Enhanced with a better gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[#030303] overflow-hidden pointer-events-none md:hidden">
        <Image
          src="/hero_white_car_cinematic.png"
          alt="Luxury performance vehicle"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 hero-img-mobile"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303]" />
        <style>{`
          @keyframes slowScale {
            0%, 100% { transform: scale(1.02); }
            50% { transform: scale(1.08); }
          }
          .hero-img-mobile { animation: slowScale 20s ease-in-out infinite; }
        `}</style>
      </div>

      {/* Desktop 3D Showroom */}
      <div className="absolute inset-0 z-0 bg-[#030303] pointer-events-auto cursor-grab active:cursor-grabbing hidden md:block">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, powerPreference: "high-performance" }}
        >
          <PerspectiveCamera makeDefault position={[5.5, 2.5, 8]} fov={32} />
          <color attach="background" args={["#030303"]} />

          <ambientLight intensity={0.4} />
          {/* Key light — dramatic top-front */}
          <spotLight position={[5, 12, 6]} intensity={35} angle={0.25} penumbra={1} castShadow shadow-bias={-0.0001} />
          {/* Rim light — blue accent from rear left */}
          <spotLight position={[-8, 6, -8]} intensity={25} angle={0.4} color="#3b82f6" />
          {/* Top highlight */}
          <pointLight position={[0, 10, 0]} intensity={15} color="#ffffff" />
          {/* Front fill */}
          <spotLight position={[8, 3, 8]} intensity={12} angle={0.4} color="#ffffff" />

          <Suspense fallback={null}>
            <ShowroomCar />
            <Environment preset="night" />
          </Suspense>

          <ContactShadows resolution={1024} scale={20} blur={2.8} opacity={0.8} far={6} color="#000000" />

          <OrbitControls
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.04}
            enableZoom={false}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.1}
            autoRotate={false}
            makeDefault
          />
        </Canvas>

        {/* Cinematic interaction cue */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group pointer-events-none">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
          <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/30 group-hover:text-white/60 transition-colors">
            Interactive Showcase
          </span>
        </div>
      </div>
    </>
  );
}
