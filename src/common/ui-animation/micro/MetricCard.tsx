interface MetricCardProps {
  value: string | number;
  label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="flex-1 bg-white rounded-xl border border-[#f0f0f0] px-4 py-3">
      <div className="font-sans text-3xl font-semibold leading-8 text-[#262626] mb-1">
        {value}
      </div>
      <div className="font-sans text-xs leading-4 text-[#606060]">{label}</div>
    </div>
  );
}
