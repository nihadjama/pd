import { ReactNode } from "react";

interface StatusBadgeProps {
  children: ReactNode;
  variant?: "active" | "overdue" | "failed" | "missed" | "completed" | "default";
  icon?: ReactNode;
  className?: string;
}

const variantStyles = {
  active: "bg-[#d1fae5] dark:bg-[#1a3a2a] border-[#86efac] dark:border-[#2d5a3d] text-[#166534] dark:text-[#86efac]",
  overdue: "bg-[#fff7ed] dark:bg-[#3a2a1a] border-[#fed7aa] dark:border-[#5a4a3d] text-[#ea580c] dark:text-[#fed7aa]",
  failed: "bg-[#fee2e2] dark:bg-[#3a1a1a] border-[#fecaca] dark:border-[#5a3d3d] text-[#dc2626] dark:text-[#fecaca]",
  missed: "bg-[#fee2e2] dark:bg-[#3a1a1a] border-[#fecaca] dark:border-[#5a3d3d] text-[#dc2626] dark:text-[#fecaca]",
  completed: "bg-[#f0f0f0] dark:bg-[#2a2a2a] border-[#e5e7eb] dark:border-[#3a3a3a] text-[#606060] dark:text-[#a0a0a0]",
  default: "bg-[#f0f0f0] dark:bg-[#2a2a2a] border-[#e5e7eb] dark:border-[#3a3a3a] text-[#262626] dark:text-[#e5e5e5]",
};

export default function StatusBadge({
  children,
  variant = "default",
  icon,
  className = "",
}: StatusBadgeProps) {
  const baseStyles = "px-2 py-0.5 rounded-full border font-sans text-[10.5px] leading-[14px] font-medium flex items-center gap-1";
  const variantStyle = variantStyles[variant];

  return (
    <div className={`${baseStyles} ${variantStyle} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
