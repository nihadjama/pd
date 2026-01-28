import { ReactNode } from "react";

export interface SmallTextProps {
  children: ReactNode;
  color?: "foreground" | "muted" | "primary";
  weight?: "normal" | "medium" | "semibold";
  className?: string;
  as?: "p" | "span" | "div";
  leading?: "tight" | "normal" | "relaxed";
}

/**
 * SmallText component for very small text (9.6px, 12px, etc.)
 * Used in widgets, badges, and compact UI elements
 */
export default function SmallText({
  children,
  color = "muted",
  weight = "normal",
  className = "",
  as: Component = "p",
  leading = "normal",
}: SmallTextProps) {
  const baseClasses = "font-sans";
  
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

  const leadingClasses = {
    tight: "text-[9.6px] leading-[12.8px]",
    normal: "text-xs leading-[12.8px]",
    relaxed: "text-xs leading-[19.2px]",
  };

  const combinedClasses = `${baseClasses} ${leadingClasses[leading]} ${colorClasses[color]} ${weightClasses[weight]} ${className}`.trim();

  return <Component className={combinedClasses}>{children}</Component>;
}
