import { ReactNode } from "react";

interface H2Props {
  children: ReactNode;
  className?: string;
}

export default function H2({ children, className = "" }: H2Props) {
  return (
    <h2 className={`font-heading font-semibold text-4xl leading-10 text-[#262626] ${className}`}>
      {children}
    </h2>
  );
}
