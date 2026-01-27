import { ReactNode } from "react";

interface H6Props {
  children: ReactNode;
  className?: string;
}

export default function H6({ children, className = "" }: H6Props) {
  return (
    <h6 className={`font-heading font-medium text-xs leading-4 text-[#262626] ${className}`}>
      {children}
    </h6>
  );
}
