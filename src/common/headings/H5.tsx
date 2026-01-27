import { ReactNode } from "react";

interface H5Props {
  children: ReactNode;
  className?: string;
}

export default function H5({ children, className = "" }: H5Props) {
  return (
    <h5 className={`font-heading font-medium text-sm leading-5 text-[#262626] ${className}`}>
      {children}
    </h5>
  );
}
