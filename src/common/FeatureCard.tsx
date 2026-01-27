import { getIcon } from "@/utils/iconMap";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const IconComponent = getIcon(icon);

  return (
    <div className="bg-white border border-[#f0f0f0] flex flex-col items-start overflow-clip p-7 rounded-xl shrink-0 w-full h-full">
      <div className="flex flex-col items-start w-full">
        <div className="flex items-center pb-5 pt-0 px-0">
          <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center p-2 rounded-[10px] shrink-0">
            {IconComponent && (
              <div className="relative shrink-0 size-6 text-[#5e48f0]">
                <IconComponent className="w-full h-full" />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-start pb-3 pt-0 px-0 w-full">
          <p className="font-sans font-normal leading-6 shrink-0 text-[#262626] text-base tracking-normal">
            {title}
          </p>
        </div>
        <p className="font-sans font-normal leading-5 text-[#606060] text-sm tracking-normal w-full">
          {description}
        </p>
      </div>
    </div>
  );
}
