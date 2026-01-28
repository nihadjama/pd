import { ReactNode } from "react";
import { Check } from "lucide-react";

export interface ContentListItemProps {
  children: ReactNode;
  variant?: "check" | "disc" | "none";
  className?: string;
  icon?: ReactNode;
}

/**
 * ContentListItem component for content lists (pricing features, privacy policy, etc.)
 * 
 * Variants:
 * - check: Shows checkmark icon (for feature lists)
 * - disc: Shows disc bullet (for regular lists)
 * - none: No marker (for custom styling)
 */
export default function ContentListItem({
  children,
  variant = "check",
  className = "",
  icon,
}: ContentListItemProps) {
  const baseClasses = "font-sans font-normal text-sm leading-5 text-muted";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (variant === "check") {
    return (
      <>
        {icon || <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />}
        <span className={combinedClasses}>{children}</span>
      </>
    );
  }

  if (variant === "disc") {
    return (
      <li className={`list-disc list-inside ${combinedClasses.replace('text-muted', 'text-foreground')}`}>
        {children}
      </li>
    );
  }

  return (
    <li className={combinedClasses}>
      {children}
    </li>
  );
}
