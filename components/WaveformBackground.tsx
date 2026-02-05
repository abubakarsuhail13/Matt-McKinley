import React, { useEffect, useRef } from 'react';

const WaveformBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerY = canvas.height * 0.45;
      const step = 0.005;
      
      // Draw 2 layers for depth
      [
        { color: 'rgba(47, 183, 179, 0.1)', amp: 35, freq: 0.008, speed: 0.015 },
        { color: 'rgba(15, 60, 90, 0.05)', amp: 20, freq: 0.012, speed: 0.008 }
      ].forEach(layer => {
        ctx.beginPath();
        ctx.strokeStyle = layer.color;
        ctx.lineWidth = 1.5;

        ctx.moveTo(0, centerY);

        for (let x = 0; x < canvas.width; x += 2) {
          // Combination of sine waves to create more natural medical-like pulse variation
          const wave1 = Math.sin(x * layer.freq + offset * layer.speed);
          const wave2 = Math.sin(x * 0.002 + offset * 0.01);
          const y = centerY + (wave1 * layer.amp) * (0.5 + wave2 * 0.5);
          
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      offset += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
    />
  );
};

export default WaveformBackground;