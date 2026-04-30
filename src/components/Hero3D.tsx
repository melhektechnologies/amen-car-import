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
    if (!scene) return;
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        
        // Ensure we handle multi-materials if they exist
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        
        materials.forEach((mat: any, index) => {
          if (!mat) return;

          // EXPERT PROPERTY-BASED TARGETING
          // 1. Check if it's opaque (Body paint is never transparent)
          const isOpaque = mat.transparent === false || mat.opacity > 0.9;
          
          // 2. Identify "Black" parts we want to keep (tires, plastic trim)
          // These usually have very high roughness and no metalness
          const isTireOrTrim = 
            mesh.name.toLowerCase().includes("tire") || 
            mesh.name.toLowerCase().includes("rubber") ||
            (mat.roughness > 0.7 && mat.metalness < 0.1);

          // 3. Identify Glass/Lights (Keep these transparent/emissive)
          const isGlass = mat.transparent === true || mat.opacity < 0.9 || mesh.name.toLowerCase().includes("glass");

          if (isOpaque && !isTireOrTrim && !isGlass) {
            const newMat = new THREE.MeshPhysicalMaterial({
              color: "#ffffff", 
              metalness: 0.9,
              roughness: 0.05,
              clearcoat: 1.0,
              clearcoatRoughness: 0.02,
              reflectivity: 1.0,
              envMapIntensity: 2.5, // Ultra-bright reflections
            });

            if (Array.isArray(mesh.material)) {
              mesh.material[index] = newMat;
            } else {
              mesh.material = newMat;
            }
          }
        });
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
