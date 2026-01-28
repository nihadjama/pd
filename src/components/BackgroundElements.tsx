"use client";

import { useEffect, useState } from "react";

// ASCII characters for decorative patterns (similar to Firecrawl)
const asciiChars = ".:+-=*X";

// Generate a random ASCII pattern with more organic distribution
function generatePattern(width: number, height: number, seed: number = 0): string {
  let pattern = "";
  // Use seed for consistent randomness
  let randomSeed = seed;
  const random = () => {
    randomSeed = (randomSeed * 9301 + 49297) % 233280;
    return randomSeed / 233280;
  };
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Create sparse patterns with more spaces than characters
      // Vary density slightly for more organic feel
      const density = 0.12 + (random() * 0.08); // 12-20% density
      if (random() > density) {
        pattern += " ";
      } else {
        pattern += asciiChars[Math.floor(random() * asciiChars.length)];
      }
    }
    pattern += "\n";
  }
  return pattern;
}

interface BackgroundElementProps {
  top: string;
  left: string;
  width?: number;
  height?: number;
  opacity?: number;
  delay?: number;
}

function BackgroundElement({
  top,
  left,
  width = 60,
  height = 30,
  opacity = 0.03,
  delay = 0,
}: BackgroundElementProps) {
  const [pattern, setPattern] = useState<string>("");

  useEffect(() => {
    // Generate unique seed based on position
    const seed = parseInt(top.replace("%", "")) * 1000 + parseInt(left.replace("%", ""));
    setPattern(generatePattern(width, height, seed));
  }, [width, height, top, left]);

  return (
    <div
      className="absolute font-mono text-[4px] leading-[0.5] tracking-[0.5px] text-primary whitespace-pre pointer-events-none select-none"
      style={{
        top,
        left,
        opacity,
        animationDelay: `${delay}s`,
      }}
    >
      {pattern}
    </div>
  );
}

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top left cluster */}
      <BackgroundElement top="10%" left="5%" width={50} height={25} opacity={0.02} delay={0} />
      <BackgroundElement top="15%" left="8%" width={40} height={20} opacity={0.015} delay={0.2} />
      
      {/* Top right cluster */}
      <BackgroundElement top="8%" left="85%" width={55} height={28} opacity={0.02} delay={0.1} />
      <BackgroundElement top="12%" left="88%" width={45} height={22} opacity={0.015} delay={0.3} />
      
      {/* Middle left */}
      <BackgroundElement top="40%" left="3%" width={60} height={30} opacity={0.025} delay={0.4} />
      <BackgroundElement top="45%" left="6%" width={50} height={25} opacity={0.02} delay={0.5} />
      
      {/* Middle right */}
      <BackgroundElement top="38%" left="90%" width={55} height={28} opacity={0.025} delay={0.6} />
      <BackgroundElement top="42%" left="93%" width={45} height={22} opacity={0.02} delay={0.7} />
      
      {/* Bottom left */}
      <BackgroundElement top="75%" left="4%" width={50} height={25} opacity={0.02} delay={0.8} />
      <BackgroundElement top="80%" left="7%" width={40} height={20} opacity={0.015} delay={0.9} />
      
      {/* Bottom right */}
      <BackgroundElement top="72%" left="86%" width={55} height={28} opacity={0.02} delay={1.0} />
      <BackgroundElement top="78%" left="89%" width={45} height={22} opacity={0.015} delay={1.1} />
      
      {/* Additional scattered elements for more coverage */}
      <BackgroundElement top="25%" left="20%" width={35} height={18} opacity={0.01} delay={1.3} />
      <BackgroundElement top="30%" left="75%" width={40} height={20} opacity={0.01} delay={1.4} />
      <BackgroundElement top="60%" left="25%" width={45} height={22} opacity={0.015} delay={1.5} />
      <BackgroundElement top="65%" left="70%" width={38} height={19} opacity={0.01} delay={1.6} />
    </div>
  );
}
