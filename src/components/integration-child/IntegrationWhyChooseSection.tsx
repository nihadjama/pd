import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { H3 } from "@/common/headings";
import { getIcon } from "@/utils/iconMap";

interface IntegrationWhyChooseSectionProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export default function IntegrationWhyChooseSection({
  heading,
  items,
}: IntegrationWhyChooseSectionProps) {
  return (
    <SectionContainer className="items-start">
      <div className="flex flex-col gap-4 items-start px-16 py-16 w-full max-w-[597px] mb-12">
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
          suffix={heading.suffix}
        />
      </div>

      <div className="grid grid-cols-3 gap-8 items-start w-full px-16">
        {items.map((item, index) => {
          const IconComponent = getIcon(item.icon);
          
          return (
            <div
              key={index}
              className="flex flex-col gap-4 items-start"
            >
              <div className="bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)] flex items-center justify-center p-4 rounded-xl w-16 h-16">
                {IconComponent && (
                  <IconComponent className="w-8 h-8 text-[#5e48f0]" />
                )}
              </div>
              <div className="flex flex-col gap-2 items-start">
                <H3 className="text-base tracking-normal">
                  {item.title}
                </H3>
                <p className="font-sans font-normal leading-5 text-[#606060] text-sm tracking-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
