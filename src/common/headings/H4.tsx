import { ReactNode } from "react";

interface H4Props {
  children: ReactNode;
  className?: string;
}

export default function H4({ children, className = "" }: H4Props) {
  return (
    <h4 className={`font-heading font-medium text-[18px] leading-[26px] text-foreground ${className}`}>
      {children}
    </h4>
  );
}
