import SectionContainer from "@/common/SectionContainer";
import FeatureCard from "@/common/FeatureCard";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";

interface IntegrationFeaturesSectionProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  items: Array<{
    icon: string;
    title: string;
    description: string;
    benefits?: string[];
  }>;
}

export default function IntegrationFeaturesSection({
  heading,
  description,
  items,
}: IntegrationFeaturesSectionProps) {
  return (
    <SectionContainer className="items-start px-4 md:px-8 lg:px-16">
      <div className="flex flex-col gap-4 items-start w-full max-w-[557px] mb-8 md:mb-10 lg:mb-12">
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
          suffix={heading.suffix}
        />
        <p className="font-sans font-normal leading-6 text-foreground text-base tracking-normal w-full">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[37px] items-start w-full">
        {items.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
