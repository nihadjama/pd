import SectionContainer from "@/common/SectionContainer";
import FeatureCard from "@/common/FeatureCard";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { getIcon } from "@/utils/iconMap";
import Image from "next/image";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitBlock {
  title: string;
  description: string;
  image?: string;
  /** When set, render title as: title + <highlighted> + titleSuffix (e.g. "Manage multiple " + "dental" + " offices") */
  titleHighlighted?: string;
  titleSuffix?: string;
}

interface FeatureListSectionProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  features: Feature[];
  layout?: string;
  id?: string;
  /** When layout is "benefitBlocks", use these blocks instead of features grid */
  blocks?: BenefitBlock[];
}

/** Gray placeholder for asset; replace with Image when block.image is set */
function BenefitBlockPlaceholder() {
  return (
    <div
      className="w-full aspect-[4/3] min-h-[160px] rounded-xl bg-muted border border-border flex items-center justify-center shrink-0"
      aria-hidden
    >
      <span className="text-xs font-sans text-muted-foreground">Image placeholder</span>
    </div>
  );
}

function BenefitBlocksLayout({
  blocks,
}: {
  blocks: BenefitBlock[];
}) {
  return (
    <div className="w-full rounded-xl border border-border bg-background overflow-hidden">
      {blocks.map((block, index) => {
        const isLast = index === blocks.length - 1;
        const placeholderFirst = index % 2 === 1;

        return (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-[minmax(200px,280px)_1fr] gap-6 md:gap-8 items-center w-full px-4 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 ${
              !isLast ? "border-b border-border" : ""
            } ${placeholderFirst ? "md:grid-flow-dense" : ""}`}
          >
            {/* Placeholder or image column */}
            <div className={`flex ${placeholderFirst ? "md:col-start-2 md:row-start-1 md:justify-end" : ""}`}>
              {block.image ? (
                <div className="relative w-full max-w-[280px] aspect-[4/3] rounded-xl overflow-hidden border border-border">
                  <Image src={block.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 280px" />
                </div>
              ) : (
                <BenefitBlockPlaceholder />
              )}
            </div>

            {/* Content column: primary bar + title + description */}
            <div className={placeholderFirst ? "md:col-start-1 md:row-start-1" : ""}>
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 w-1 rounded-full min-h-[1.5em] mt-1.5 bg-primary"
                  aria-hidden
                />
                <div className="flex flex-col gap-2 min-w-0">
                  <h3 className="font-heading font-semibold text-lg md:text-xl leading-tight text-foreground">
                    {block.titleHighlighted != null && block.titleSuffix != null ? (
                      <>
                        {block.title}
                        <span className="text-primary">{block.titleHighlighted}</span>
                        {block.titleSuffix}
                      </>
                    ) : (
                      block.title
                    )}
                  </h3>
                  <p className="font-sans font-normal text-sm leading-6 text-muted tracking-normal">
                    {block.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StepsLayout({ features }: { features: Feature[] }) {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {features.map((feature, index) => {
          const IconComponent = getIcon(feature.icon);
          const isLast = index === features.length - 1;

          return (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center gap-4 px-6 py-8 md:py-6 ${
                !isLast ? "border-b md:border-b-0 md:border-r border-border" : ""
              }`}
            >
              {/* Step Number */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-medium text-base shrink-0">
                {index + 1}
              </div>

              {/* Icon */}
              {IconComponent && (
                <div className="w-6 h-6 text-primary">
                  <IconComponent className="w-full h-full" />
                </div>
              )}

              {/* Title */}
              <h3 className="font-heading font-medium text-lg leading-6 text-foreground">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-sans font-normal text-sm leading-5 text-muted tracking-normal max-w-[280px]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FeatureGridLayout({ features }: { features: Feature[] }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start">
      {features.map((feature, index) => {
        const IconComponent = getIcon(feature.icon);
        return (
          <div
            key={index}
            className="flex flex-col items-start gap-4 text-left"
          >
            {IconComponent && (
              <div className="w-10 h-10 text-primary shrink-0" aria-hidden>
                <IconComponent className="w-full h-full" />
              </div>
            )}
            <h3 className="font-heading font-semibold text-lg leading-6 text-foreground">
              {feature.title}
            </h3>
            <span className="w-12 h-0.5 bg-primary rounded-full shrink-0" aria-hidden />
            <p className="font-sans font-normal text-sm leading-6 text-muted tracking-normal">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/** Accent bar + title + description boxes (2x2 grid), consistent with campaigns feature visual language */
function AccentBlocksLayout({ features }: { features: Feature[] }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-start gap-3 text-left"
        >
          <span
            className="shrink-0 w-1 rounded-full min-h-[1.5em] mt-1.5 bg-primary"
            aria-hidden
          />
          <div className="flex flex-col gap-2 min-w-0">
            <h3 className="font-heading font-semibold text-lg md:text-xl leading-tight text-foreground">
              {feature.title}
            </h3>
            <p className="font-sans font-normal text-sm leading-6 text-muted tracking-normal">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FeatureListSection({
  heading,
  description,
  features,
  layout,
  id,
  blocks,
}: FeatureListSectionProps) {
  const isSteps = layout === "steps";
  const isFeatureGrid = layout === "featureGrid";
  const isBenefitBlocks = layout === "benefitBlocks" && blocks && blocks.length > 0;
  const isAccentBlocks = layout === "accentBlocks";

  return (
    <SectionContainer
      id={id}
      className={`${isSteps ? "items-center" : "md:items-start px-4 md:px-8 lg:px-12"} ${isFeatureGrid ? "items-center" : ""} ${isBenefitBlocks ? "items-stretch" : ""} ${isAccentBlocks ? "items-stretch" : ""}`}
    >
      <div className={`flex flex-col gap-4 w-full ${
        isSteps
          ? "items-center px-4 md:px-8 lg:px-12"
          : isFeatureGrid
            ? "items-center max-w-3xl mx-auto text-center"
            : isBenefitBlocks
              ? "items-center md:items-start max-w-[557px] px-4 md:px-8 lg:px-12"
              : isAccentBlocks
                ? "items-center md:items-start max-w-3xl"
                : "items-center md:items-start max-w-[557px]"
      }`}>
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
          suffix={heading.suffix}
          className={isSteps ? "text-center" : isFeatureGrid ? "text-center" : isAccentBlocks ? "text-center md:text-left" : "text-center md:text-left"}
          as="h2"
        />
        {description && (
          <p className={`font-sans font-normal leading-6 text-foreground text-base tracking-normal w-full ${
            isSteps ? "text-center max-w-xl" : isFeatureGrid ? "text-center" : isAccentBlocks ? "text-center md:text-left" : "text-center md:text-left"
          }`}>
            {description}
          </p>
        )}
      </div>

      {isSteps ? (
        <StepsLayout features={features} />
      ) : isFeatureGrid ? (
        <FeatureGridLayout features={features} />
      ) : isBenefitBlocks ? (
        <BenefitBlocksLayout blocks={blocks} />
      ) : isAccentBlocks ? (
        <AccentBlocksLayout features={features} />
      ) : (
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
      )}
    </SectionContainer>
  );
}
