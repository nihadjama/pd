import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  /** Accessible label for the button (use when visible text doesn't fully describe action) */
  "aria-label"?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "secondary",
  icon,
  iconPosition = "right",
  className = "",
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center text-sm font-medium px-3 py-2.5 rounded-[10px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover px-4 justify-between gap-4",
    secondary: "text-secondary font-medium hover:text-primary border bg-border",
    link: "font-medium hover:text-primary-hover bg-transparent",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={children ? "mr-2.5" : ""}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={children ? "-mr-2" : ""}>{icon}</span>
      )}
    </>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  // Otherwise, render as button element
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
