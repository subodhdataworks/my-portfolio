"use client";

import {
  Points,
  PointMaterial,
  useTexture,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import type { Points as PointsType, Group as GroupType, Mesh as MeshType } from "three";

// Preload planet textures for instant rendering
if (typeof window !== "undefined") {
  useTexture.preload("/space/earth-texture.jpg");
}

/* =========================================================================
   1. Ulkapind (Shooting Stars / Meteorites System)
   Authentic cosmic meteors with glowing radiant heads and particle tails
   ========================================================================= */
export const UlkapindShootingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      size: number;
    }

    interface Meteor {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      colorHead: string;
      colorTail: string;
      glowColor: string;
      width: number;
      sparks: Spark[];
    }

    const meteors: Meteor[] = [];
    const colorPalettes = [
      { head: "#ffffff", tail: "rgba(56, 189, 248, 0.95)", glow: "#38bdf8" }, // Radiant Cyan
      { head: "#ffffff", tail: "rgba(192, 132, 252, 0.95)", glow: "#c084fc" }, // Cosmic Violet
      { head: "#ffffff", tail: "rgba(251, 191, 36, 0.98)", glow: "#fbbf24" }, // Fiery Golden-Amber
      { head: "#ffffff", tail: "rgba(52, 211, 153, 0.95)", glow: "#34d399" }, // Emerald Aurora
    ];

    const createMeteor = () => {
      const pal = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
      // Spawn mostly from top and upper edges shooting diagonally
      const startX = Math.random() * (width * 1.1) - width * 0.1;
      const startY = Math.random() * (height * 0.35) - 60;
      const angle = Math.PI / 4.2 + (Math.random() - 0.5) * 0.28;
      const speed = 15 + Math.random() * 12;
      const length = 140 + Math.random() * 130;

      meteors.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        colorHead: pal.head,
        colorTail: pal.tail,
        glowColor: pal.glow,
        width: 1.8 + Math.random() * 1.4,
        sparks: [],
      });
    };

    // Staggered spawns
    let lastSpawn = Date.now();
    let spawnInterval = 1800 + Math.random() * 1400;

    // Initial meteors on page mount
    for (let i = 0; i < 2; i++) {
      createMeteor();
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      if (now - lastSpawn > spawnInterval) {
        createMeteor();
        lastSpawn = now;
        spawnInterval = 1600 + Math.random() * 2200;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        const dx = Math.cos(m.angle) * m.speed;
        const dy = Math.sin(m.angle) * m.speed;

        m.x += dx;
        m.y += dy;

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        // Emit micro-sparks from meteor tail
        if (Math.random() > 0.4) {
          m.sparks.push({
            x: m.x - Math.cos(m.angle) * (Math.random() * m.length * 0.4),
            y: m.y - Math.sin(m.angle) * (Math.random() * m.length * 0.4),
            vx: (Math.random() - 0.5) * 1.6,
            vy: (Math.random() - 0.5) * 1.6,
            alpha: 1,
            color: m.colorTail,
            size: 1 + Math.random() * 1.5,
          });
        }

        // Draw radiant tail gradient
        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(0.65, m.colorTail);
        grad.addColorStop(1, m.colorHead);

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";
        ctx.shadowColor = m.glowColor;
        ctx.shadowBlur = 14;

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Glowing incandescent Meteor Head
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.width * 1.25, 0, Math.PI * 2);
        ctx.fillStyle = m.colorHead;
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.restore();

        // Render burning sparks
        for (let s = m.sparks.length - 1; s >= 0; s--) {
          const sp = m.sparks[s];
          sp.x += sp.vx;
          sp.y += sp.vy;
          sp.alpha -= 0.045;
          if (sp.alpha <= 0) {
            m.sparks.splice(s, 1);
            continue;
          }
          ctx.save();
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
          ctx.fillStyle = sp.color;
          ctx.globalAlpha = sp.alpha;
          ctx.shadowColor = sp.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.restore();
        }

        // Remove off-screen meteors
        if (m.x > width + 220 || m.y > height + 220) {
          meteors.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full fixed inset-0 pointer-events-none z-[2]"
    />
  );
};

/* =========================================================================
   2. 3D Rotating Earth (NASA Blue Marble Texture + Glowing Atmosphere)
   ========================================================================= */
const EarthPlanet = () => {
  const earthGroupRef = useRef<GroupType>(null);
  const moonRef = useRef<MeshType>(null);
  const texture = useTexture("/space/earth-texture.jpg");

  useFrame((state, delta) => {
    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.y += delta * 0.09;
    }
    if (moonRef.current) {
      // Moon orbiting Earth
      const time = state.clock.getElapsedTime() * 0.3;
      moonRef.current.position.x = Math.cos(time) * 0.58;
      moonRef.current.position.z = Math.sin(time) * 0.58;
    }
  });

  return (
    <group position={[1.35, -0.65, -0.85]} rotation={[0.41, 0, 0]}>
      {/* Rotating Earth */}
      <group ref={earthGroupRef}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.34, 64, 64]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.65}
            metalness={0.1}
          />
        </mesh>
      </group>

      {/* Atmospheric Cyan-Blue Halo Layer */}
      <mesh>
        <sphereGeometry args={[0.356, 32, 32]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Orbiting Moon */}
      <mesh ref={moonRef} position={[0.58, 0.05, 0]}>
        <sphereGeometry args={[0.07, 24, 24]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.9} />
      </mesh>
    </group>
  );
};

/* =========================================================================
   3. Multi-Tier Cosmic Nebula & Starfield
   Deep cosmos stars, violet dust, and cyan galactic cluster
   ========================================================================= */
export const StarBackground = (props: PointsInstancesProps) => {
  const starsRef = useRef<PointsType | null>(null);
  const violetNebulaRef = useRef<PointsType | null>(null);
  const cyanDustRef = useRef<PointsType | null>(null);

  // Deep Micro Stars
  const [starsSphere] = useState(() =>
    random.inSphere(new Float32Array(5000 * 3), { radius: 1.3 }),
  );
  // Violet Nebula Dust Cloud
  const [violetSphere] = useState(() =>
    random.inSphere(new Float32Array(2500 * 3), { radius: 1.4 }),
  );
  // Cyan Galactic Arm Dust
  const [cyanSphere] = useState(() =>
    random.inSphere(new Float32Array(2000 * 3), { radius: 1.15 }),
  );

  useFrame((_state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= delta / 14;
      starsRef.current.rotation.y -= delta / 18;
    }
    if (violetNebulaRef.current) {
      violetNebulaRef.current.rotation.x += delta / 22;
      violetNebulaRef.current.rotation.y -= delta / 26;
    }
    if (cyanDustRef.current) {
      cyanDustRef.current.rotation.x -= delta / 28;
      cyanDustRef.current.rotation.y += delta / 24;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Tier 1: Deep Background White Stars */}
      <Points
        ref={starsRef}
        stride={3}
        positions={new Float32Array(starsSphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.0022}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>

      {/* Tier 2: Violet & Purple Nebula Cloud */}
      <Points
        ref={violetNebulaRef}
        stride={3}
        positions={new Float32Array(violetSphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.0028}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>

      {/* Tier 3: Cyan Interstellar Arm */}
      <Points
        ref={cyanDustRef}
        stride={3}
        positions={new Float32Array(cyanSphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.0024}
          sizeAttenuation
          depthWrite={false}
          opacity={0.75}
        />
      </Points>
    </group>
  );
};

/* =========================================================================
   4. StarsCanvas Master Component
   Combines 3D Earth, Multi-Tier Nebula, and Ulkapind Canvas
   ========================================================================= */
export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Canvas 1: Ulkapind (Shooting Stars / Meteorites) */}
    <UlkapindShootingStars />

    {/* Canvas 2: 3D Celestial WebGL Galaxy */}
    <Canvas camera={{ position: [0, 0, 1] }} className="pointer-events-none">
      {/* Celestial Lighting */}
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 3, 3]} intensity={1.8} />

      <Suspense fallback={null}>
        {/* Multi-tier Starfield & Nebulae */}
        <StarBackground />

        {/* 3D Earth with Atmosphere (positioned far in bottom-right) */}
        <EarthPlanet />
      </Suspense>
    </Canvas>
  </div>
);
