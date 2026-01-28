import { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
  className?: string;
}

export default function H1({ children, className = "" }: H1Props) {
  return (
    <h1 className={`text-[32px] font-heading font-medium leading-[36px] text-foreground md:text-[52px] md:leading-[56px] lg:text-[60px] lg:leading-[64px] ${className}`}>
      {children}
    </h1>
  );
}
