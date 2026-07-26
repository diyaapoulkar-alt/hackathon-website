import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CyberHeroCanvas() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

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

    // Mouse coordinates for magnetic aura
    const mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Floating 3D Nodes
    const nodes = [];
    const numNodes = 40;

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5, // depth scale
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 3 + 2,
        angle: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.02,
      });
    }

    let gridOffset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const isLight = theme === 'light';
      const gridColor = isLight ? 'rgba(99, 102, 241, 0.12)' : 'rgba(0, 240, 255, 0.12)';
      const nodeColor1 = isLight ? '#6366f1' : '#00f0ff';
      const nodeColor2 = isLight ? '#ec4899' : '#8b5cf6';

      // 1. Draw 3D Perspective Cyber Grid at the bottom
      gridOffset = (gridOffset + 0.6) % 40;
      const horizonY = height * 0.55;

      ctx.save();
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      // Vertical perspective lines converging to horizon
      const numPerspLines = 36;
      for (let i = -numPerspLines / 2; i <= numPerspLines / 2; i++) {
        const xStart = width / 2 + (i * width) / (numPerspLines * 0.4);
        ctx.beginPath();
        ctx.moveTo(xStart, height);
        ctx.lineTo(width / 2 + i * 8, horizonY);
        ctx.stroke();
      }

      // Horizontal moving grid lines
      for (let y = height; y > horizonY; y -= 24) {
        const adjustedY = y + (gridOffset % 24);
        if (adjustedY <= height && adjustedY > horizonY) {
          const ratio = (adjustedY - horizonY) / (height - horizonY);
          ctx.beginPath();
          ctx.moveTo(width / 2 - (width / 2) * ratio * 1.5, adjustedY);
          ctx.lineTo(width / 2 + (width / 2) * ratio * 1.5, adjustedY);
          ctx.strokeStyle = isLight
            ? `rgba(99, 102, 241, ${ratio * 0.25})`
            : `rgba(0, 240, 255, ${ratio * 0.25})`;
          ctx.stroke();
        }
      }
      ctx.restore();

      // 2. Mouse Glow Radial Energy Wave
      if (mouse.x && mouse.y) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          10,
          mouse.x,
          mouse.y,
          250
        );
        gradient.addColorStop(0, isLight ? 'rgba(99, 102, 241, 0.22)' : 'rgba(0, 240, 255, 0.22)');
        gradient.addColorStop(0.5, isLight ? 'rgba(236, 72, 153, 0.08)' : 'rgba(139, 92, 246, 0.08)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Floating 3D Geometric Orbit Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.angle += n.speed;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Orbit radius expansion
        const orbitX = n.x + Math.cos(n.angle) * 15;
        const orbitY = n.y + Math.sin(n.angle) * 15;

        ctx.beginPath();
        ctx.arc(orbitX, orbitY, n.radius * n.z, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? nodeColor1 : nodeColor2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = i % 2 === 0 ? nodeColor1 : nodeColor2;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby nodes with holographic beam
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = isLight
              ? `rgba(99, 102, 241, ${0.25 * (1 - dist / 130)})`
              : `rgba(0, 240, 255, ${0.25 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
