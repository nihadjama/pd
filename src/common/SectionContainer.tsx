import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={`flex flex-col gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto py-12 md:py-16 lg:py-20 border-x ${className}`}>
      {children}
    </section>
  );
}
