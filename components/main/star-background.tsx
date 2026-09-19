"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, useEffect, Suspense, memo } from "react";
import type { Points as PointsType } from "three";

/* =========================================================================
   1. Lightweight Shooting Stars (Zero-Lag CPU Canvas)
   Fast, elegant cosmic meteors without expensive shadowBlur operations
   ========================================================================= */
export const UlkapindShootingStars = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    interface Meteor {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      colorTail: string;
      width: number;
    }

    const meteors: Meteor[] = [];
    const tailColors = [
      "rgba(56, 189, 248, 0.8)",   // Cyan
      "rgba(192, 132, 252, 0.8)",  // Violet
      "rgba(251, 191, 36, 0.8)",   // Amber
    ];

    const createMeteor = () => {
      if (meteors.length >= 2) return; // Keep max 2 meteors on screen
      const tailColor = tailColors[Math.floor(Math.random() * tailColors.length)];
      const startX = Math.random() * (width * 1.1) - width * 0.05;
      const startY = Math.random() * (height * 0.3) - 40;
      const angle = Math.PI / 4.2 + (Math.random() - 0.5) * 0.2;
      const speed = 14 + Math.random() * 8;
      const length = 120 + Math.random() * 100;

      meteors.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        colorTail,
        width: 1.5 + Math.random(),
      });
    };

    let lastSpawn = Date.now();
    let spawnInterval = 2500 + Math.random() * 2000;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      if (now - lastSpawn > spawnInterval) {
        createMeteor();
        lastSpawn = now;
        spawnInterval = 2500 + Math.random() * 2500;
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        // Draw radiant tail gradient (fast native stroke without shadowBlur)
        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(0.7, m.colorTail);
        grad.addColorStop(1, "#ffffff");

        ctx.strokeStyle = grad;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Meteor Head
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.width * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // Remove off-screen meteors
        if (m.x > width + 100 || m.y > height + 100) {
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
});

UlkapindShootingStars.displayName = "UlkapindShootingStars";

/* =========================================================================
   2. Optimized Multi-Tier Cosmic Starfield
   Reduced particle count (2,900 points vs 9,500 points) for 60fps performance
   ========================================================================= */
export const StarBackground = memo((props: PointsInstancesProps) => {
  const starsRef = useRef<PointsType | null>(null);
  const violetNebulaRef = useRef<PointsType | null>(null);
  const cyanDustRef = useRef<PointsType | null>(null);

  // Deep Micro Stars (1500 particles)
  const [starsSphere] = useState(() =>
    random.inSphere(new Float32Array(1500 * 3), { radius: 1.3 }),
  );
  // Violet Nebula Dust Cloud (700 particles)
  const [violetSphere] = useState(() =>
    random.inSphere(new Float32Array(700 * 3), { radius: 1.4 }),
  );
  // Cyan Galactic Arm Dust (600 particles)
  const [cyanSphere] = useState(() =>
    random.inSphere(new Float32Array(600 * 3), { radius: 1.15 }),
  );

  useFrame((_state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= delta / 18;
      starsRef.current.rotation.y -= delta / 22;
    }
    if (violetNebulaRef.current) {
      violetNebulaRef.current.rotation.x += delta / 26;
      violetNebulaRef.current.rotation.y -= delta / 30;
    }
    if (cyanDustRef.current) {
      cyanDustRef.current.rotation.x -= delta / 32;
      cyanDustRef.current.rotation.y += delta / 28;
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
});

StarBackground.displayName = "StarBackground";

/* =========================================================================
   3. StarsCanvas Master Component
   Optimized WebGL Canvas with bounded pixel ratio (dpr) and low-power profile
   ========================================================================= */
export const StarsCanvas = memo(() => (
  <div className="w-full h-auto fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    {/* Canvas 1: Lightweight Shooting Stars */}
    <UlkapindShootingStars />

    {/* Canvas 2: 3D Celestial WebGL Galaxy */}
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1.5]}
      gl={{ powerPreference: "low-power", antialias: false, depth: false }}
      className="pointer-events-none"
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 3, 3]} intensity={1.5} />

      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
));

StarsCanvas.displayName = "StarsCanvas";
