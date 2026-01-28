import SectionContainer from "@/common/SectionContainer";
import FeatureCard from "@/common/FeatureCard";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";

interface FeatureListSectionProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export default function FeatureListSection({
  heading,
  description,
  features,
}: FeatureListSectionProps) {
  return (
    <SectionContainer className="items-center md:items-start px-4 md:px-8 lg:px-12">
      <div className="flex flex-col gap-4 items-center md:items-start w-full max-w-[557px]">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 items-start w-full">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
