interface ProgressBarProps {
  progress: number;
  label?: string;
  showLabel?: boolean;
  isAnimated?: boolean;
}

export default function ProgressBar({
  progress,
  label,
  showLabel = true,
  isAnimated = true,
}: ProgressBarProps) {
  const displayProgress = isAnimated ? progress : 0;

  return (
    <div className="w-full">
      {showLabel && label && (
        <div className="flex items-center justify-between mb-2">
          <span className="font-sans text-xs leading-[17px] text-[#262626] dark:text-[#e5e5e5]">
            {label}
          </span>
          <span className="font-sans text-xs font-medium leading-[17px] text-[#262626] dark:text-[#e5e5e5]">
            {progress}%
          </span>
        </div>
      )}
      <div className="w-full h-2 bg-[#f0f0f0] dark:bg-[#2a2a2a] rounded-full overflow-hidden">
        <div
          className={`h-full bg-[#5e48f0] dark:bg-[#7c6cf0] rounded-full ${isAnimated ? "transition-all duration-1000 ease-out" : ""}`}
          style={{ width: `${displayProgress}%` }}
        />
      </div>
    </div>
  );
}
