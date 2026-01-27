import { ReactNode } from "react";

interface H5Props {
  children: ReactNode;
  className?: string;
}

export default function H5({ children, className = "" }: H5Props) {
  return (
    <h5 className={`font-heading font-medium text-[16px] leading-[24px] text-[#262626] ${className}`}>
      {children}
    </h5>
  );
}
