import { ReactNode } from "react";

export interface ParagraphProps {
  children: ReactNode;
  variant?: "xs" | "sm" | "base" | "lg";
  color?: "foreground" | "muted" | "primary";
  weight?: "normal" | "medium" | "semibold";
  className?: string;
  as?: "p" | "span" | "div";
}

/**
 * Paragraph component for consistent paragraph typography
 * 
 * Variants:
 * - xs: text-xs leading-4 (12px/16px) - Small labels, badges
 * - sm: text-sm leading-5 (14px/20px) - Small text, descriptions
 * - base: text-base leading-6 (16px/24px) - Standard body text (default)
 * - lg: text-lg leading-7 (18px/28px) - Larger body text
 */
export default function Paragraph({
  children,
  variant = "base",
  color = "foreground",
  weight = "normal",
  className = "",
  as: Component = "p",
}: ParagraphProps) {
  const baseClasses = "font-sans";
  
  const variantClasses = {
    xs: "text-xs leading-4",
    sm: "text-sm leading-5",
    base: "text-base leading-6",
    lg: "text-lg leading-7",
  };

  const colorClasses = {
    foreground: "text-foreground",
    muted: "text-muted",
    primary: "text-primary",
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${colorClasses[color]} ${weightClasses[weight]} ${className}`.trim();

  return <Component className={combinedClasses}>{children}</Component>;
}
