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
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center text-sm font-medium px-3 py-2.5 rounded-[10px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variantStyles = {
    primary: "bg-[#5e48f0] text-[#f9f9f9] hover:bg-[#4d3ad0] px-4 justify-between gap-4",
    secondary: "text-[#262626] font-medium hover:text-[#5e48f0] border bg-[#e5e7eb]",
    link: " font-medium hover:text-[#4d3ad0] bg-transparent",
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
    >
      {content}
    </button>
  );
}
