import { ReactNode } from "react";

interface H2Props {
  children: ReactNode;
  className?: string;
}

export default function H2({ children, className = "" }: H2Props) {
  return (
    <h2 className={`font-heading font-medium text-[28px] leading-[32px] mb-4 text-foreground md:text-[36px] md:leading-[40px] lg:text-[48px] lg:leading-[52px] ${className}`}>
      {children}
    </h2>
  );
}
