import Link from "next/link";
import { ReactNode } from "react";

export interface NavListItemProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  borderBottom?: boolean;
  as?: "li" | "div";
}

/**
 * NavListItem component for consistent navigation and footer list items
 * Standard styling: font-sans font-normal text-sm text-foreground
 */
export default function NavListItem({
  children,
  href,
  onClick,
  className = "",
  borderBottom = false,
  as: Component = "li",
}: NavListItemProps) {
  const baseClasses = "font-sans font-normal text-sm text-foreground hover:text-primary transition-colors";
  const combinedClasses = `${baseClasses} ${className}`.trim();
  const liBorderClass = borderBottom ? "border-b" : "";

  const content = href ? (
    <Link href={href} className={combinedClasses} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );

  return <Component className={liBorderClass}>{content}</Component>;
}
