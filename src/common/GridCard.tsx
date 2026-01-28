interface GridCardProps {
  children: React.ReactNode;
  isRightColumn?: boolean;
  isBottomRow?: boolean;
  className?: string;
}

export default function GridCard({
  children,
  isRightColumn,
  isBottomRow,
  className = "",
}: GridCardProps) {
  return (
    <div
      className={`bg-transparent border-border flex flex-col items-start px-4 md:px-8 lg:px-12 py-6 md:py-10 lg:py-14 shrink-0 w-full md:w-1/2 ${!isRightColumn ? 'md:border-r' : ''} ${!isBottomRow ? 'border-b' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
