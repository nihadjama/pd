import { getIcon } from "@/utils/iconMap";

interface CategoryBadgeProps {
  icon: string;
  text: string;
}

export default function CategoryBadge({ icon, text }: CategoryBadgeProps) {
  const IconComponent = getIcon(icon);

  return (
    <div className="flex gap-1 items-center justify-center pb-1.5 border-b border-[#e5e7eb]">
      {IconComponent && (
        <div className="relative shrink-0 size-[14px] text-[#606060]">
          <IconComponent className="w-full h-full" />
        </div>
      )}
      <p className="font-sans font-normal leading-5 shrink-0 text-[#606060] text-sm text-center whitespace-nowrap tracking-normal">
        {text}
      </p>
    </div>
  );
}
