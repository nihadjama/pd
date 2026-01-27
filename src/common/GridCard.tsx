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
      className={`border-[#e5e7eb] flex flex-col items-start px-16 py-14 shrink-0 w-full md:w-1/2 ${!isRightColumn ? 'border-r' : ''} ${!isBottomRow ? 'border-b' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
