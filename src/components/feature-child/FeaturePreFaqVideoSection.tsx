import SectionContainer from "@/common/SectionContainer";

interface FeaturePreFaqVideoSectionProps {
  heading: string;
  videoUrl?: string;
}

export default function FeaturePreFaqVideoSection({
  heading,
  videoUrl,
}: FeaturePreFaqVideoSectionProps) {
  return (
    <SectionContainer className="items-center border-t">
      <h2 className="font-heading font-semibold text-foreground text-xl md:text-2xl lg:text-3xl text-center px-4 md:px-8 lg:px-12 max-w-4xl mx-auto leading-tight tracking-normal">
        {heading}
      </h2>

      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[800px]">
          {videoUrl ? (
            <div
              className="relative w-full overflow-hidden rounded-xl border border-border bg-card"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={videoUrl}
                title="Product video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full rounded-xl"
              />
            </div>
          ) : (
            <div
              className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-card"
              aria-label="Video placeholder"
            >
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <span className="font-sans text-sm font-medium">Video coming soon</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
