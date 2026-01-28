interface AvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary";
}

const sizeStyles = {
  sm: "w-6 h-6 text-xs",
  md: "w-8 h-8 text-sm",
  lg: "w-16 h-16 text-xl",
};

const variantStyles = {
  default: "bg-[#f0f0f0] dark:bg-[#2a2a2a] text-[#606060] dark:text-[#a0a0a0]",
  primary: "bg-[#e0f2fe] dark:bg-[#1a2a3a] border-2 border-[#bae6fd] dark:border-[#2d4a5d] text-[#0369a1] dark:text-[#bae6fd]",
};

export default function Avatar({
  initials,
  size = "sm",
  variant = "default",
}: AvatarProps) {
  const sizeStyle = sizeStyles[size];
  const variantStyle = variantStyles[variant];
  const fontStyle = size === "lg" ? "font-semibold leading-6" : "font-medium";

  return (
    <div
      className={`flex items-center justify-center rounded-full ${sizeStyle} ${variantStyle} ${fontStyle} shrink-0`}
    >
      {initials}
    </div>
  );
}
