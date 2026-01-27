"use client";

import { useEffect, useState } from "react";
import { molar } from "@/ascii/molar";

// Characters to use for scrambling (excluding spaces)
const scrambleChars = ".:+-=*X";

export default function AnimatedMolar() {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    // Convert molar string to array of characters for easier manipulation
    const chars = molar.split("");
    const totalDuration = 2000; // Total animation duration in ms
    const frameDelay = 12; // ~60fps
    const startTime = Date.now();
    let animationFrame: ReturnType<typeof setTimeout>;

    // Group indices by character type (excluding spaces/newlines)
    const charGroups = new Map<string, number[]>();
    chars.forEach((char, index) => {
      if (char !== " " && char !== "\n" && char !== "\r") {
        if (!charGroups.has(char)) {
          charGroups.set(char, []);
        }
        charGroups.get(char)!.push(index);
      }
    });

    // Convert groups to array and shuffle the order of groups
    const groupArray = Array.from(charGroups.entries()).sort(() => Math.random() - 0.5);
    
    // Flatten groups into reveal order (all instances of one char, then all of another, etc.)
    const revealOrder: number[] = [];
    groupArray.forEach(([_, indices]) => {
      // Shuffle indices within each group for more organic reveal
      const shuffledIndices = [...indices].sort(() => Math.random() - 0.5);
      revealOrder.push(...shuffledIndices);
    });

    const totalCharsToReveal = revealOrder.length;
    const revealedSet = new Set<number>();

    // Initialize with scrambled characters (preserving spaces)
    const initialText = chars.map((char) => {
      if (char === " " || char === "\n" || char === "\r") {
        return char; // Keep spaces and newlines as-is
      }
      return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
    }).join("");

    setDisplayText(initialText);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / totalDuration, 1); // 0 to 1
      const revealedCount = Math.floor(progress * totalCharsToReveal);

      if (progress >= 1) {
        // Animation complete - show final text
        setDisplayText(molar);
        return;
      }

      // Mark characters as revealed based on grouped order
      for (let i = 0; i < revealedCount; i++) {
        revealedSet.add(revealOrder[i]);
      }

      const newText = chars.map((char, index) => {
        if (revealedSet.has(index)) {
          // Already revealed - show actual character
          return char;
        } else {
          // Not yet revealed - show scrambled (but keep spaces as spaces)
          if (char === " " || char === "\n" || char === "\r") {
            return char;
          }
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
      }).join("");

      setDisplayText(newText);
      animationFrame = setTimeout(animate, frameDelay);
    };

    // Start animation
    animationFrame = setTimeout(animate, frameDelay);
    
    return () => {
      if (animationFrame) {
        clearTimeout(animationFrame);
      }
    };
  }, []);

  return (
    <div className="ascii-reveal absolute left-1/2 -bottom-[500px] z-0 -translate-x-1/2 -translate-y-1/2 w-[1000px] font-mono text-[5px] leading-[0.67] tracking-[0.84px] text-[#7864ff] whitespace-pre opacity-0 pointer-events-none select-none">
      {displayText || molar}
    </div>
  );
}

