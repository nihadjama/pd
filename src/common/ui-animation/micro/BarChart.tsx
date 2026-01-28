interface BarChartProps {
  data: number[];
  labels: string[];
  maxHeight?: number;
  isAnimated?: boolean;
}

export default function BarChart({
  data,
  labels,
  maxHeight = 100,
  isAnimated = true,
}: BarChartProps) {
  return (
    <div className="flex items-end justify-between gap-2 h-[120px]">
      {labels.map((label, index) => {
        const height = (data[index] / 100) * maxHeight;
        return (
          <div key={label} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full flex items-end justify-center"
              style={{ height: `${maxHeight}px` }}
            >
              <div
                className={`w-full bg-[#5e48f0] dark:bg-[#7c6cf0] rounded-t ${isAnimated ? "transition-all duration-300 ease-out" : ""}`}
                style={{ height: `${height}px` }}
              />
            </div>
            <span className="font-sans text-[10px] leading-3 text-[#606060] dark:text-[#a0a0a0] mt-1">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
