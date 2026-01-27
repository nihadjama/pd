"use client";

import { useEffect, useRef } from "react";

interface GridBackgroundProps {
  gridSize?: number;
  lineColor?: string;
  contentWidth?: number;
  contentPadding?: number;
}

export default function GridBackground({
  gridSize = 85,
  lineColor = "#e5e7eb",
  contentWidth = 960,
  contentPadding = 64,
}: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawGrid = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const dpr = window.devicePixelRatio || 1;

      // Set canvas size accounting for device pixel ratio
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Calculate grid offset to center align to viewport
      // Center the grid pattern around the viewport center
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Calculate offset to center the grid
      // Place the center of a grid cell at the viewport center
      const leftOffset = (centerX - gridSize / 2) % gridSize;
      const topOffset = (centerY - gridSize / 2) % gridSize;
      
      // Ensure positive offsets
      const adjustedLeftOffset = leftOffset < 0 ? leftOffset + gridSize : leftOffset;
      const adjustedTopOffset = topOffset < 0 ? topOffset + gridSize : topOffset;

      // Configure canvas for crisp, thin lines matching CSS borders
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1; // 1px line width (context is already scaled by dpr)
      ctx.imageSmoothingEnabled = false; // Disable smoothing for crisp lines

      // Draw vertical lines first (behind white background) - center aligned
      // Start from negative position to ensure full coverage
      const startX = adjustedLeftOffset - Math.ceil(width / gridSize + 1) * gridSize;
      for (let x = startX; x <= width + gridSize; x += gridSize) {
        const pixelX = Math.round(x);
        ctx.beginPath();
        ctx.moveTo(pixelX + 0.5, 0);
        ctx.lineTo(pixelX + 0.5, height);
        ctx.stroke();
      }

      // Draw horizontal lines first (behind white background) - center aligned
      // Start from negative position to ensure full coverage
      const startY = adjustedTopOffset - Math.ceil(height / gridSize + 1) * gridSize;
      for (let y = startY; y <= height + gridSize; y += gridSize) {
        const pixelY = Math.round(y);
        ctx.beginPath();
        ctx.moveTo(0, pixelY + 0.5);
        ctx.lineTo(width, pixelY + 0.5);
        ctx.stroke();
      }

      // Calculate center white area: use odd number of boxes for perfect center alignment
      // 9 boxes × 9 boxes ensures the center box aligns with viewport center
      const whiteAreaBoxesX = 9; // Odd number for perfect centering
      const whiteAreaBoxesY = 7; // Odd number for perfect centering
      const whiteAreaWidth = whiteAreaBoxesX * gridSize - 1;
      const whiteAreaHeight = whiteAreaBoxesY * gridSize - 1;
      
      // Center the white area on viewport: place center of white area at viewport center
      // For odd number of boxes (n), center is at (n * gridSize) / 2 from the left edge
      // Position so the center of white area aligns with viewport center (centerX, centerY)
      const whiteAreaLeft = centerX - (whiteAreaBoxesX * gridSize) / 2 + 1;
      const whiteAreaTop = centerY - (whiteAreaBoxesY * gridSize) / 2 + 1;

      // Draw white background for center area on top of grid lines
      ctx.fillStyle = "#f9f9f9";
      ctx.fillRect(whiteAreaLeft, whiteAreaTop, whiteAreaWidth, whiteAreaHeight);
    };

    // Initial draw
    drawGrid();

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      drawGrid();
    });

    resizeObserver.observe(canvas);

    // Also listen to window resize for device pixel ratio changes
    const handleResize = () => {
      drawGrid();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [gridSize, lineColor, contentWidth, contentPadding]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
