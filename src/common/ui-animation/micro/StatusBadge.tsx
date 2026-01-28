import { ReactNode } from "react";

interface StatusBadgeProps {
  children: ReactNode;
  variant?: "active" | "overdue" | "failed" | "missed" | "completed" | "default";
  icon?: ReactNode;
  className?: string;
}

const variantStyles = {
  active: "bg-[#d1fae5] border-[#86efac] text-[#166534]",
  overdue: "bg-[#fff7ed] border-[#fed7aa] text-[#ea580c]",
  failed: "bg-[#fee2e2] border-[#fecaca] text-[#dc2626]",
  missed: "bg-[#fee2e2] border-[#fecaca] text-[#dc2626]",
  completed: "bg-[#f0f0f0] border-[#e5e7eb] text-[#606060]",
  default: "bg-[#f0f0f0] border-[#e5e7eb] text-[#262626]",
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
