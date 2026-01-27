import { ReactNode } from "react";

interface H3Props {
  children: ReactNode;
  className?: string;
}

export default function H3({ children, className = "" }: H3Props) {
  return (
    <h3 className={`font-heading font-medium text-lg leading-6 text-[#262626] ${className}`}>
      {children}
    </h3>
  );
}
