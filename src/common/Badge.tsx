import { Check } from "lucide-react";

interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="flex gap-1 items-center rounded-full shrink-0 border px-2 pr-3 py-1.5 border-border">
      <div className="flex items-center shrink-0">
        <div className="relative shrink-0 size-[14px] text-primary">
          <Check className="w-full h-full" />
        </div>
      </div>
      <p className="font-sans font-normal leading-5 shrink-0 text-foreground text-sm whitespace-nowrap tracking-normal">
        {text}
      </p>
    </div>
  );
}
