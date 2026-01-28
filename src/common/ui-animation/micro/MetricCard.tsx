interface MetricCardProps {
  value: string | number;
  label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="flex-1 bg-white rounded-xl border border-[#e5e7eb] px-4 py-3">
      <div className="font-sans text-2xl font-semibold leading-[28px] text-[#262626] mb-1">
        {value}
      </div>
      <div className="font-sans text-[10.5px] leading-[14px] text-[#606060]">{label}</div>
    </div>
  );
}
