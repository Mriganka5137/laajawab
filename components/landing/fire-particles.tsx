"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
}

export const FireParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const createParticle = (): Particle => {
      const x = Math.random() * canvas.width;
      const y = canvas.height;
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 1.2, // Reduced from 2
        vy: -Math.random() * 2 - 0.5, // Reduced from 3 + 1
        life: Math.random() * 0.7 + 0.7, // Increased from 0.5 + 0.5
        size: Math.random() * 3 + 2,
        color: `hsl(${Math.random() * 30 + 10}, 100%, 50%)`,
      };
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.current.forEach((particle, index) => {
        particle.x += particle.vx * 0.7; // Added speed modifier
        particle.y += particle.vy * 0.7; // Added speed modifier
        particle.life -= 0.007; // Reduced from 0.01
        particle.size *= 0.995; // Changed from 0.99 for slower shrinking

        if (particle.life <= 0) {
          particles.current.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        }
      });

      // Add new particles
      if (particles.current.length < 100) {
        particles.current.push(createParticle());
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
};
