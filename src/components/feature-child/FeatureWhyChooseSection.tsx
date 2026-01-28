import SectionContainer from "@/common/SectionContainer";
import GridCard from "@/common/GridCard";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";

interface FeatureWhyChooseSectionProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  items: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

export default function FeatureWhyChooseSection({
  heading,
  description,
  items,
}: FeatureWhyChooseSectionProps) {
  return (
    <SectionContainer className="items-center md:items-start">
      <div className="flex flex-col gap-4 items-center md:items-start px-4 md:px-8 lg:px-16 py-6 md:py-12 lg:py-16 w-full md:max-w-[597px]">
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
          suffix={heading.suffix}
          className="text-center md:text-left"
        />
        <p className="font-sans font-normal leading-5 text-[#606060] text-sm tracking-normal w-full text-center md:text-left">
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
              <div className="flex flex-col gap-4 md:gap-6 grow items-start min-w-0 w-full">
                <div className="bg-[#5e48f0] border border-[#5e48f0] flex flex-col items-center justify-center rounded-xl shrink-0 w-10 h-10">
                  <p className="font-sans font-medium leading-6 text-white text-base whitespace-nowrap tracking-normal">
                    {item.number}
                  </p>
                </div>
                <div className="flex flex-col items-start w-full">
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
