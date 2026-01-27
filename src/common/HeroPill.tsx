import { getIcon } from "@/utils/iconMap";

interface HeroPillProps {
  icon: string;
  text: string;
}

export default function HeroPill({ icon, text }: HeroPillProps) {
  const IconComponent = getIcon(icon);

  return (
    <div className="flex gap-1 items-center justify-center border border-[#E0E0E0] rounded-full px-2 py-1">
      {IconComponent && (
        <div className="relative shrink-0 size-[14px] text-[#5e48f0]">
          <IconComponent className="w-full h-full" />
        </div>
      )}
      <p className="font-sans font-normal leading-5 shrink-0 text-[#606060] text-sm text-center whitespace-nowrap text-uppercase tracking-normal">
        {text}
      </p>
    </div>
  );
}
