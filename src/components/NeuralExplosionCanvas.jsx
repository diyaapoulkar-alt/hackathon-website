import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, RefreshCw } from 'lucide-react';
import { audioSFX } from './AudioSFX';

export default function NeuralExplosionCanvas() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const [explosionState, setExplosionState] = useState('building'); // 'building', 'exploded', 'vortex'
  const triggerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Color Palette based on theme
    const getPalette = () => {
      if (theme === 'light') {
        return ['#6366f1', '#0284c7', '#ec4899', '#f59e0b', '#3b82f6'];
      } else if (theme === 'obsidian') {
        return ['#a855f7', '#38bdf8', '#f43f5e', '#fbbf24', '#c084fc'];
      } else {
        return ['#00f0ff', '#8b5cf6', '#ec4899', '#ffb700', '#00ffcc'];
      }
    };

    const palette = getPalette();

    // 1. Neural Nodes
    const numNeuralNodes = 45;
    const neuralNodes = [];
    for (let i = 0; i < numNeuralNodes; i++) {
      neuralNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 3 + 2,
        color: palette[Math.floor(Math.random() * palette.length)],
        charge: 0,
      });
    }

    // 2. Sparks & Explosion Particles
    let sparks = [];
    let shockwaveRadius = 0;
    let shockwaveAlpha = 0;
    let isExploded = false;
    let startTime = Date.now();
    let vortexAngle = 0;

    const triggerExplosion = () => {
      audioSFX.init();
      audioSFX.playClickSFX();

      sparks = [];
      shockwaveRadius = 10;
      shockwaveAlpha = 1;
      isExploded = true;
      startTime = Date.now();
      setExplosionState('exploded');

      // Create 180+ explosive spark particles radiating outward from center
      const centerX = width / 2;
      const centerY = height * 0.45;

      for (let i = 0; i < 220; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 12 + 4;
        sparks.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 3.5 + 1.5,
          color: palette[Math.floor(Math.random() * palette.length)],
          life: 1,
          decay: Math.random() * 0.015 + 0.005,
          orbitRadius: Math.random() * (width * 0.4) + 80,
          orbitAngle: angle,
          orbitSpeed: (Math.random() - 0.5) * 0.03,
          sparklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    triggerRef.current = triggerExplosion;

    // Auto-trigger explosion on initial load after 1.5 seconds
    const autoExplodeTimer = setTimeout(() => {
      triggerExplosion();
    }, 1500);

    // Main Canvas Render Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      const elapsed = now - startTime;
      vortexAngle += 0.015;

      // ----------------------------------------------------
      // PHASE 1: Neural Network Synapse Lines & Nodes
      // ----------------------------------------------------
      ctx.save();
      for (let i = 0; i < neuralNodes.length; i++) {
        const n1 = neuralNodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = n1.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = n1.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Synapse connections
        for (let j = i + 1; j < neuralNodes.length; j++) {
          const n2 = neuralNodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            const alpha = (1 - dist / 140) * (isExploded ? 0.25 : 0.6);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Synaptic pulse signals traveling along lines
            if (!isExploded) {
              const pulsePos = (elapsed * 0.003 + i) % 1;
              const px = n1.x + (n2.x - n1.x) * pulsePos;
              const py = n1.y + (n2.y - n1.y) * pulsePos;
              ctx.beginPath();
              ctx.arc(px, py, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = '#00f0ff';
              ctx.shadowBlur = 10;
              ctx.shadowColor = '#00f0ff';
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }
      ctx.restore();

      // ----------------------------------------------------
      // PHASE 2: Shockwave Ring Explosion
      // ----------------------------------------------------
      if (isExploded && shockwaveAlpha > 0.01) {
        shockwaveRadius += 18;
        shockwaveAlpha *= 0.95;

        ctx.save();
        ctx.beginPath();
        ctx.arc(width / 2, height * 0.45, shockwaveRadius, 0, Math.PI * 2);
        ctx.strokeStyle = theme === 'light'
          ? `rgba(99, 102, 241, ${shockwaveAlpha})`
          : `rgba(0, 240, 255, ${shockwaveAlpha})`;
        ctx.lineWidth = 4;
        ctx.shadowBlur = 35;
        ctx.shadowColor = palette[0];
        ctx.stroke();
        ctx.restore();
      }

      // ----------------------------------------------------
      // PHASE 3: 3D Rotating Sparks & Orbiting Energy Matrix
      // ----------------------------------------------------
      if (isExploded) {
        const centerX = width / 2;
        const centerY = height * 0.45;

        for (let i = 0; i < sparks.length; i++) {
          const s = sparks[i];

          // After initial velocity slows, enter rotating vortex orbit
          if (elapsed > 400) {
            s.vx *= 0.94;
            s.vy *= 0.94;

            s.orbitAngle += s.orbitSpeed;
            const targetX = centerX + Math.cos(s.orbitAngle + vortexAngle) * s.orbitRadius;
            const targetY = centerY + Math.sin(s.orbitAngle + vortexAngle) * (s.orbitRadius * 0.5);

            s.x += (targetX - s.x) * 0.04;
            s.y += (targetY - s.y) * 0.04;
          } else {
            s.x += s.vx;
            s.y += s.vy;
          }

          // Mouse magnetic interaction
          if (mouse.x && mouse.y) {
            const mdx = mouse.x - s.x;
            const mdy = mouse.y - s.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 120) {
              s.x -= (mdx / mdist) * 2;
              s.y -= (mdy / mdist) * 2;
            }
          }

          // Sparkle pulse size
          s.sparklePhase += 0.1;
          const currentSize = s.radius * (1 + 0.3 * Math.sin(s.sparklePhase));

          ctx.save();
          ctx.beginPath();
          ctx.arc(s.x, s.y, Math.max(0.8, currentSize), 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.shadowBlur = 16;
          ctx.shadowColor = s.color;
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      clearTimeout(autoExplodeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* Interactive Trigger Button on Hero */}
      <button
        onClick={() => triggerRef.current && triggerRef.current()}
        onMouseEnter={() => audioSFX.playHoverSFX()}
        className="pointer-events-auto absolute top-28 right-6 sm:right-12 z-20 px-4 py-2 rounded-xl bg-slate-900/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono flex items-center gap-2 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer group"
      >
        <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
        <span>Trigger Neural Explosion</span>
      </button>
    </div>
  );
}
