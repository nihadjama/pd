interface MetricCardProps {
  value: string | number;
  label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="flex-1 bg-white dark:bg-[#0a0a0a] rounded-xl border border-[#e5e7eb] dark:border-[#2a2a2a] px-4 py-3">
      <div className="font-sans text-2xl font-semibold leading-[28px] text-[#262626] dark:text-[#e5e5e5] mb-1">
        {value}
      </div>
      <div className="font-sans text-[10.5px] leading-[14px] text-[#606060] dark:text-[#a0a0a0]">{label}</div>
    </div>
  );
}
