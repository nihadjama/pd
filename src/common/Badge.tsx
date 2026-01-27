import { Check } from "lucide-react";

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="flex gap-1 items-center rounded shrink-0 bg-[#f0f0f0] px-2 py-1">
      <div className="flex items-center shrink-0">
        <div className="relative shrink-0 size-[14px] text-[#5e48f0]">
          <Check className="w-full h-full" />
        </div>
      </div>
      <p className="font-sans font-normal leading-5 shrink-0 text-[#262626] text-sm whitespace-nowrap tracking-normal">
        {text}
      </p>
    </div>
  );
}
