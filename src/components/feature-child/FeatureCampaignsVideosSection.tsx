import SectionContainer from "@/common/SectionContainer";
import { Play } from "lucide-react";

export interface CampaignVideoBlock {
  heading: string;
  subheading: string;
  youtubeUrl?: string;
}

interface FeatureCampaignsVideosSectionProps {
  videos: CampaignVideoBlock[];
}

function VideoPlaceholder() {
  return (
    <div
      className="relative flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-muted"
      aria-hidden
    >
      <div className="flex flex-col items-center gap-3 text-muted">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background">
          <Play className="h-6 w-6 text-primary" aria-hidden />
        </div>
        <span className="text-sm font-sans font-medium text-secondary">Video placeholder</span>
      </div>
    </div>
  );
}

export default function FeatureCampaignsVideosSection({
  videos,
}: FeatureCampaignsVideosSectionProps) {
  if (!videos?.length) return null;

  return (
    <SectionContainer className="items-stretch px-4 md:px-8 lg:px-12 border-t border-border">
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
        {videos.map((block, index) => (
          <div key={index} className="flex flex-col gap-6 w-full">
            <h2 className="font-heading font-semibold text-xl md:text-2xl leading-tight text-foreground">
              {block.heading}
            </h2>

            <div className="w-full max-w-[800px]">
              {block.youtubeUrl ? (
                <div
                  className="relative w-full overflow-hidden rounded-xl border border-border"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src={block.youtubeUrl}
                    title={block.subheading}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full rounded-xl"
                  />
                </div>
              ) : (
                <VideoPlaceholder />
              )}
            </div>

            <p className="font-sans text-base font-medium leading-6 text-foreground">
              {block.subheading}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
