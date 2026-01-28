import { ReactNode } from "react";

interface H6Props {
  children: ReactNode;
  className?: string;
}

export default function H6({ children, className = "" }: H6Props) {
  return (
    <h6 className={`font-heading font-medium text-[14px] leading-[20px] text-foreground ${className}`}>
      {children}
    </h6>
  );
}
