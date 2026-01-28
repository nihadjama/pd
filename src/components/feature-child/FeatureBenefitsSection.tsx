import SectionContainer from "@/common/SectionContainer";
import GridCard from "@/common/GridCard";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { Check } from "lucide-react";

interface FeatureBenefitsSectionProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export default function FeatureBenefitsSection({
  heading,
  description,
  items,
}: FeatureBenefitsSectionProps) {
  return (
    <SectionContainer className="items-center md:items-start border-t">
      <div className="flex flex-col gap-4 items-center md:items-start px-4 md:px-8 lg:px-16 py-6 md:py-12 lg:py-16 w-full max-w-1/2">
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
          suffix={heading.suffix}
          className="text-center md:text-left"
        />
        <p className="font-sans font-normal leading-6 text-[#262626] text-base tracking-normal w-full text-center md:text-left">
          {description}
        </p>
      </div>

      <div className="border-y border-[#e5e7eb] flex flex-wrap w-full">
        {items.map((item, index) => {
          const isRightColumn = index % 2 === 1;
          const isBottomRow = index >= items.length - 2;

          return (
            <GridCard
              key={index}
              isRightColumn={isRightColumn}
              isBottomRow={isBottomRow}
            >
              <div className="flex gap-3 items-start w-full">
                <Check className="w-5 h-5 text-[#5e48f0] shrink-0 mt-0.5" />
                <div className="flex flex-col grow items-start min-w-0">
                  <div className="flex items-center pb-1 pt-0 px-0 w-full">
                    <p className="font-sans font-medium leading-6 text-[#262626] text-base md:whitespace-nowrap tracking-normal break-words">
                      {item.title}
                    </p>
                  </div>
                  <p className="font-sans font-normal leading-5 text-[#606060] text-sm tracking-normal w-full">
                    {item.description}
                  </p>
                </div>
              </div>
            </GridCard>
          );
        })}
      </div>
    </SectionContainer>
  );
}
