import Button from "@/common/Button";
import Badge from "@/common/Badge";
import CategoryBadge from "@/common/CategoryBadge";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { Clock } from "lucide-react";

interface IntegrationHeroSectionProps {
  category: {
    icon: string;
    text: string;
  };
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  cta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  badges: string[];
  stat: {
    value: string;
    label: string;
    description: string;
  };
}

export default function IntegrationHeroSection({
  category,
  heading,
  description,
  cta,
  secondaryCta,
  badges,
  stat,
}: IntegrationHeroSectionProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-16 md:py-24 lg:py-32 lg:px-16">
      <div className="relative z-10 flex w-full max-w-[768px] flex-col items-center gap-8 md:gap-10 lg:gap-12">
        {/* Main Content Card */}
        <div className="border border-[#e5e7eb] flex flex-col items-start p-4 md:p-8 lg:p-12 w-full">
          <div className="flex flex-col gap-6 md:gap-8 items-center w-full">
            {/* Category Badge */}
            <div className="flex flex-col gap-6 items-center">
              <CategoryBadge icon={category.icon} text={category.text} />

              {/* Heading */}
              <HeadingWithHighlight
                text={heading.text}
                highlighted={heading.highlighted}
                suffix={heading.suffix}
                className="text-4xl md:text-5xl leading-[48px] text-center max-w-[568px]"
                as="h1"
              />

              {/* Description */}
              <p className="font-sans font-normal leading-6 text-[#262626] text-base text-center tracking-normal max-w-[572px]">
                {description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button href={cta.href} variant="primary" className="flex items-center justify-center">
                {cta.text}
              </Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" className="flex items-center justify-center">
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-4 items-start justify-center px-0 py-8 md:py-10 lg:py-12 w-full">
            {badges.map((badge, index) => (
              <Badge key={index} text={badge} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
