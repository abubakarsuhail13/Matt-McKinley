
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
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(47, 183, 179, 0.2)';
      ctx.lineWidth = 2;

      const centerY = canvas.height / 2;
      const amplitude = 30;
      const frequency = 0.01;

      ctx.moveTo(0, centerY);

      for (let x = 0; x < canvas.width; x++) {
        // Create a heart-beat like wave or pulse
        const y = centerY + Math.sin(x * frequency + offset) * amplitude * Math.sin(x * 0.002);
        ctx.lineTo(x, y);
      }

      ctx.stroke();
      offset += 0.02;
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
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
    />
  );
};

export default WaveformBackground;
