import Link from "next/link";
import { getIcon } from "@/utils/iconMap";
import { H3 } from "@/common/headings";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  // Optional props for detailed variant
  href?: string;
  category?: string;
  badges?: string[];
  variant?: "simple" | "detailed";
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
  category,
  badges,
  variant = "simple",
}: FeatureCardProps) {
  const IconComponent = getIcon(icon);

  // Simple variant (existing usage)
  if (variant === "simple") {
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

  // Detailed variant (features page)
  const content = (
    <>
      {/* Large Icon Section */}
      {IconComponent && (
        <div className="flex items-center justify-center w-full h-48 md:h-56 bg-[#f9f9f9] p-6">
          <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center justify-center p-4 rounded-[10px] group-hover:scale-105 transition-transform duration-200">
            <IconComponent className="w-12 h-12 text-[#5e48f0]" />
          </div>
        </div>
      )}

      <div className="p-4 md:p-6 flex flex-col gap-4">
        {/* Category */}
        {category && (
          <div className="flex items-center gap-3">
            <H3 className="text-lg font-medium text-[#606060]">{category}</H3>
          </div>
        )}

        {/* Description */}
        <p className="font-sans font-normal text-sm md:text-sm leading-6 text-[#606060] line-clamp-2">
          {description}
        </p>

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {badges.slice(0, 3).map((badge, index) => (
              <span
                key={index}
                className="text-xs font-medium text-[#606060] bg-[#f9f9f9] px-2 py-1"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Link Arrow */}
        {href && (
          <div className="flex items-center gap-2 text-[#5e48f0] font-medium text-sm mt-auto pt-2">
            <span>Learn more</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        )}
      </div>
    </>
  );

  // Render as Link if href provided, otherwise as div
  if (href) {
    return (
      <Link
        href={href}
        className="group bg-white border-l last:border-r -ml-px border-b border-[#e5e7eb] flex flex-col gap-4 hover:border-b-[#5e48f0] transition-all duration-200  relative"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="group bg-white border-l last:border-r -ml-px border-b border-[#e5e7eb] flex flex-col gap-4 hover:border-[#5e48f0] transition-all duration-200 hover:shadow-lg relative">
      {content}
    </div>
  );
}
