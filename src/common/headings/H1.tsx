import { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
  className?: string;
}

export default function H1({ children, className = "" }: H1Props) {
  return (
    <h1 className={`text-4xl font-heading font-semibold leading-tight text-[#262626] md:text-5xl lg:text-[60px] lg:leading-[60px] ${className}`}>
      {children}
    </h1>
  );
}
