import Image from "next/image";
import SectionContainer from "@/common/SectionContainer";
import GridCard from "@/common/GridCard";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { H3 } from "@/common/headings";

interface WhyChooseItem {
  number?: string;
  title: string;
  description: string;
  image?: string;
}

interface FeatureWhyChooseSectionProps {
  heading: {
    text: string;
    highlighted: string;
    suffix: string;
  };
  description: string;
  items: WhyChooseItem[];
  layout?: string;
}

function GridLayout({ items }: { items: WhyChooseItem[] }) {
  return (
    <div className="border-y border-border flex flex-wrap w-full">
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
              <div className="bg-primary border border-primary flex flex-col items-center justify-center rounded-xl shrink-0 w-10 h-10">
                <p className="font-sans font-medium leading-6 text-card text-base whitespace-nowrap tracking-normal">
                  {item.number}
                </p>
              </div>
              <div className="flex flex-col items-start w-full gap-4 md:gap-6">
                <div className="flex items-center pb-1 pt-0 px-0 w-full">
                  <H3>
                    {item.title}
                  </H3>
                </div>
                <p className="font-sans font-normal leading-5 text-muted text-sm tracking-normal w-full">
                  {item.description}
                </p>
              </div>
            </div>
          </GridCard>
        );
      })}
    </div>
  );
}

function AlternatingLayout({ items }: { items: WhyChooseItem[] }) {
  return (
    <div className="border-y border-border flex flex-wrap w-full">
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
              {/* Title with left accent bar */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <H3>
                  {item.title}
                </H3>
              </div>

              {/* Description */}
              <p className="font-sans font-normal leading-5 text-muted text-sm tracking-normal w-full pl-4">
                {item.description}
              </p>
            </div>
          </GridCard>
        );
      })}
    </div>
  );
}

function FeatureBlocksLayout({ items }: { items: WhyChooseItem[] }) {
  return (
    <div className="flex flex-col w-full gap-6 md:gap-8 px-4 md:px-8 lg:px-12">
      {items.map((item, index) => {
        const textFirst = index % 2 === 0;
        const hasImage = !!item.image;

        const textBlock = (
          <div className="flex flex-col gap-4 items-start text-left w-full min-w-0">
            <div className="flex items-center gap-3 w-full">
              <div
                className="w-1 h-9 md:h-10 rounded-full bg-primary shrink-0 flex-shrink-0"
                aria-hidden
              />
              <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground leading-tight">
                {item.title}
              </h3>
            </div>
            <p className="font-sans font-normal text-sm md:text-base leading-6 text-muted tracking-normal w-full max-w-xl">
              {item.description}
            </p>
          </div>
        );

        const imageBlock = item.image ? (
          <div className="relative w-full shrink-0 rounded-xl overflow-hidden bg-muted/30 border border-border min-h-[200px] md:min-h-[240px] flex items-center justify-center">
            <Image
              src={item.image}
              alt=""
              width={400}
              height={280}
              className="w-full h-auto object-contain max-h-[240px] p-4"
            />
          </div>
        ) : null;

        return (
          <article
            key={index}
            className="bg-card border border-border rounded-xl overflow-hidden flex flex-col md:flex-row md:items-center w-full"
          >
            {hasImage ? (
              textFirst ? (
                <>
                  <div className="flex-1 p-6 md:p-8 lg:p-10">{textBlock}</div>
                  <div className="w-full md:w-[45%] md:min-w-[280px] md:border-l border-border">
                    {imageBlock}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full md:w-[45%] md:min-w-[280px] md:border-r border-border order-2 md:order-1">
                    {imageBlock}
                  </div>
                  <div className="flex-1 p-6 md:p-8 lg:p-10 order-1 md:order-2">{textBlock}</div>
                </>
              )
            ) : (
              <div className="w-full p-6 md:p-8 lg:p-10">{textBlock}</div>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default function FeatureWhyChooseSection({
  heading,
  description,
  items,
  layout = "grid",
}: FeatureWhyChooseSectionProps) {
  const isAlternating = layout === "alternating";
  const isFeatureBlocks = layout === "featureBlocks";

  return (
    <SectionContainer className="items-center md:items-start">
      {/* Heading area */}
      <div
        className={`flex flex-col gap-6 px-4 md:px-8 lg:px-12 py-6 md:py-12 lg:py-16 w-full ${
          isAlternating || isFeatureBlocks
            ? "items-center text-center"
            : "md:flex-row md:gap-16 items-center md:items-start"
        }`}
      >
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
          suffix={heading.suffix}
          className={isAlternating || isFeatureBlocks ? "text-center" : "md:text-left"}
          as="h2"
        />
        {description && (
          <p className={`font-sans font-normal text-base leading-6 text-muted tracking-normal max-w-3xl ${
            isAlternating || isFeatureBlocks ? "text-center" : "md:text-left"
          }`}>
            {description}
          </p>
        )}
      </div>

      {/* Content */}
      {isFeatureBlocks ? (
        <FeatureBlocksLayout items={items} />
      ) : isAlternating ? (
        <AlternatingLayout items={items} />
      ) : (
        <GridLayout items={items} />
      )}
    </SectionContainer>
  );
}
