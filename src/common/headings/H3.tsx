import { ReactNode } from "react";

interface H3Props {
  children: ReactNode;
  className?: string;
}

export default function H3({ children, className = "" }: H3Props) {
  return (
    <h3 className={`font-heading font-[450] text-[20px] leading-[28px] text-foreground ${className}`}>
      {children}
    </h3>
  );
}
