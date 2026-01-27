'use client';

import { useEffect, useRef } from 'react';

interface IntegrationAnimationProps {
  className?: string;
}

export default function IntegrationAnimation({ className }: IntegrationAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    let rect = canvas.getBoundingClientRect();
    
    const resizeCanvas = () => {
      rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    
    resizeCanvas();

    // Animation state
    let time = 0;
    const duration = 5000; // 5 seconds for full cycle
    const primaryColor = '#5e48f0';
    const bgColor = '#f9f9f9';

    const draw = () => {
      // Clear canvas
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Calculate animation progress
      const progress = (time % duration) / duration;
      const easedProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      // Layout calculations
      const centerX = rect.width / 2;
      const circleY = rect.height * 0.25;
      const circleRadius = 100;
      const barY = rect.height * 0.65;
      const barHeight = 60;
      const barWidth = Math.min(rect.width * 0.85, 600);
      const barX = centerX - barWidth / 2;
      const boxWidth = 120;
      const boxHeight = 180;
      const boxRadius = 24;
      const leftBoxX = barX - boxWidth - 40;
      const rightBoxX = barX + barWidth + 40;
      const boxY = barY;

      // Helper function to draw rounded rectangle
      const drawRoundedRect = (x: number, y: number, width: number, height: number, radius: number) => {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
      };

      // Draw central circle (stopwatch/alarm clock)
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(centerX, circleY, circleRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw arrow pointers on left and right sides of circle (pointing inward)
      const pointerSize = 12;
      const pointerLength = 20;
      
      // Left pointer
      ctx.fillStyle = primaryColor;
      ctx.beginPath();
      ctx.moveTo(centerX - circleRadius - pointerLength, circleY);
      ctx.lineTo(centerX - circleRadius, circleY - pointerSize);
      ctx.lineTo(centerX - circleRadius, circleY + pointerSize);
      ctx.closePath();
      ctx.fill();

      // Right pointer
      ctx.beginPath();
      ctx.moveTo(centerX + circleRadius + pointerLength, circleY);
      ctx.lineTo(centerX + circleRadius, circleY - pointerSize);
      ctx.lineTo(centerX + circleRadius, circleY + pointerSize);
      ctx.closePath();
      ctx.fill();

      // Draw stopwatch buttons (top right)
      const buttonSize = 10;
      const buttonX = centerX + circleRadius * 0.65;
      const buttonY = circleY - circleRadius * 0.75;
      ctx.fillStyle = primaryColor;
      ctx.fillRect(buttonX - buttonSize / 2, buttonY - buttonSize, buttonSize, buttonSize);
      ctx.fillRect(buttonX - buttonSize / 2, buttonY - buttonSize * 2.5, buttonSize, buttonSize);

      // Draw progress arc (top portion fills as animation progresses)
      const progressArc = easedProgress * Math.PI * 1.5; // 0 to 1.5π (top 3/4)
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(centerX, circleY, circleRadius, -Math.PI / 2, -Math.PI / 2 + progressArc);
      ctx.stroke();

      // Draw "15" inside circle
      ctx.fillStyle = primaryColor;
      ctx.font = 'bold 72px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('15', centerX, circleY);

      // Draw "100% Integrated" bar with arrow ends
      const arrowWidth = 30;
      const arrowHeight = barHeight;

      // Main bar body
      ctx.fillStyle = primaryColor;
      drawRoundedRect(barX + arrowWidth, barY - barHeight / 2, barWidth - arrowWidth * 2, barHeight, barHeight / 2);
      ctx.fill();

      // Left arrow (pointing inward/right)
      ctx.beginPath();
      ctx.moveTo(barX, barY);
      ctx.lineTo(barX + arrowWidth, barY - barHeight / 2);
      ctx.lineTo(barX + arrowWidth, barY + barHeight / 2);
      ctx.closePath();
      ctx.fill();

      // Right arrow (pointing inward/left)
      ctx.beginPath();
      ctx.moveTo(barX + barWidth, barY);
      ctx.lineTo(barX + barWidth - arrowWidth, barY - barHeight / 2);
      ctx.lineTo(barX + barWidth - arrowWidth, barY + barHeight / 2);
      ctx.closePath();
      ctx.fill();

      // "100% Integrated" text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('100% Integrated', centerX, barY);

      // Draw left box
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 2;
      drawRoundedRect(leftBoxX - boxWidth / 2, boxY - boxHeight / 2, boxWidth, boxHeight, boxRadius);
      ctx.fill();
      ctx.stroke();

      // Draw speech bubble logo in left box
      const leftLogoX = leftBoxX;
      const leftLogoY = boxY;
      const bubbleRadius = 28;
      
      // Speech bubble body
      ctx.fillStyle = primaryColor;
      ctx.beginPath();
      ctx.arc(leftLogoX, leftLogoY - 8, bubbleRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Speech bubble tail (pointing right)
      ctx.beginPath();
      ctx.moveTo(leftLogoX + bubbleRadius * 0.6, leftLogoY + 8);
      ctx.lineTo(leftLogoX + bubbleRadius * 0.6 + 12, leftLogoY + 20);
      ctx.lineTo(leftLogoX + bubbleRadius * 0.6 - 8, leftLogoY + 18);
      ctx.closePath();
      ctx.fill();
      
      // P letter
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('P', leftLogoX, leftLogoY - 8);

      // Draw right box
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 2;
      drawRoundedRect(rightBoxX - boxWidth / 2, boxY - boxHeight / 2, boxWidth, boxHeight, boxRadius);
      ctx.fill();
      ctx.stroke();

      // Draw circle with ring logo in right box
      const rightLogoX = rightBoxX;
      const rightLogoY = boxY;
      const outerRadius = 30;
      const innerRadius = 22;
      
      // Outer circle (dark green)
      ctx.fillStyle = '#2d5016';
      ctx.beginPath();
      ctx.arc(rightLogoX, rightLogoY, outerRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner circle (white, creating ring effect)
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(rightLogoX, rightLogoY, innerRadius, 0, Math.PI * 2);
      ctx.fill();

      // Draw checkmark on right edge of bar (overlapping with right box)
      const checkSize = 24;
      const checkX = barX + barWidth - arrowWidth - 15;
      const checkY = barY;
      
      // Small rounded square for checkmark background
      const checkBgSize = checkSize + 12;
      ctx.fillStyle = '#ffffff';
      drawRoundedRect(checkX - checkBgSize / 2, checkY - checkBgSize / 2, checkBgSize, checkBgSize, 6);
      ctx.fill();
      
      // Checkmark
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(checkX - checkSize * 0.35, checkY);
      ctx.lineTo(checkX - checkSize * 0.1, checkY + checkSize * 0.25);
      ctx.lineTo(checkX + checkSize * 0.35, checkY - checkSize * 0.25);
      ctx.stroke();

      // Subtle connection animation - draw lines from boxes to bar
      const connectionProgress = Math.min(easedProgress * 1.2, 1);
      
      if (connectionProgress > 0) {
        // Left connection line
        const leftLineStartX = leftBoxX + boxWidth / 2;
        const leftLineEndX = barX + arrowWidth;
        const leftLineY = boxY;
        
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 2;
        ctx.globalAlpha = connectionProgress * 0.6;
        ctx.beginPath();
        ctx.moveTo(leftLineStartX, leftLineY);
        ctx.lineTo(leftLineEndX, leftLineY);
        ctx.stroke();
        
        // Right connection line
        const rightLineStartX = rightBoxX - boxWidth / 2;
        const rightLineEndX = barX + barWidth - arrowWidth;
        const rightLineY = boxY;
        
        ctx.beginPath();
        ctx.moveTo(rightLineStartX, rightLineY);
        ctx.lineTo(rightLineEndX, rightLineY);
        ctx.stroke();
        
        ctx.globalAlpha = 1;
      }

      // Update time
      time += 16; // ~60fps

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
