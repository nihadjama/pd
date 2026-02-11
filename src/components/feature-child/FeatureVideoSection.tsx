import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Image from "next/image";

interface FeatureVideoSectionProps {
  heading: string | {
    text: string;
    highlighted: string;
    suffix?: string;
  };
  videoUrl?: string;
  trustedHeading: string;
  trustedLogos: Array<{
    src: string;
    alt: string;
  }>;
}

export default function FeatureVideoSection({
  heading,
  videoUrl,
  trustedHeading,
  trustedLogos,
}: FeatureVideoSectionProps) {
  return (
    <SectionContainer id="how-it-works" className="items-center">
      {/* Heading */}
      <div className="px-4 md:px-8 lg:px-12 w-full">
        {typeof heading === "string" ? (
          <HeadingWithHighlight text={heading} className="text-center" as="h2" />
        ) : (
          <HeadingWithHighlight
            text={heading.text}
            highlighted={heading.highlighted}
            suffix={heading.suffix}
            className="text-center"
            as="h2"
          />
        )}
      </div>

      {/* Video */}
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[800px]">
          {videoUrl ? (
            <div className="relative w-full overflow-hidden rounded-xl border border-border" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={videoUrl}
                title="Product demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full rounded-xl"
              />
            </div>
          ) : (
            <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-card">
              <div className="flex flex-col items-center gap-3 text-muted">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span className="text-sm font-medium font-sans">Video coming soon</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trusted By */}
      <div className="w-full border-t border-border pt-10 md:pt-12 px-4 md:px-8 lg:px-12">
        <h3 className="font-heading text-center text-lg font-medium text-foreground md:text-xl">
          {trustedHeading}
        </h3>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:mt-10 md:gap-x-16">
          {trustedLogos.map((logo) => (
            <div key={logo.src} className="relative h-10 w-[140px] md:h-11 md:w-[160px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(min-width: 768px) 160px, 140px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
