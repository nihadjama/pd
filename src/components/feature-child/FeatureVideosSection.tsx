import SectionContainer from "@/common/SectionContainer";
import { Play } from "lucide-react";

export interface FeatureVideoItem {
  title: string;
  youtubeUrl?: string;
}

interface FeatureVideosSectionProps {
  videos: FeatureVideoItem[];
}

function VideoPlaceholder() {
  return (
    <div
      className="flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-muted"
      aria-hidden
    >
      <span className="text-xs font-sans text-secondary">Video placeholder</span>
    </div>
  );
}

export default function FeatureVideosSection({ videos }: FeatureVideosSectionProps) {
  if (!videos?.length) return null;

  return (
    <SectionContainer className="items-stretch px-4 md:px-8 lg:px-12 border-t border-border">
      <div className="w-full rounded-xl border border-border bg-background overflow-hidden">
        {videos.map((video, index) => {
          const isLast = index === videos.length - 1;
          return (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-[1fr_minmax(200px,340px)] gap-6 md:gap-8 items-center w-full px-4 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 ${
                !isLast ? "border-b border-border" : ""
              }`}
            >
              {/* Video placeholder or embed */}
              <div className="w-full min-w-0 order-2 md:order-1">
                {video.youtubeUrl ? (
                  <div
                    className="relative w-full overflow-hidden rounded-xl border border-border"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <iframe
                      src={video.youtubeUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                ) : (
                  <VideoPlaceholder />
                )}
              </div>

              {/* Title + CTA */}
              <div className="flex flex-col gap-4 min-w-0 order-1 md:order-2">
                <div className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-1 rounded-full min-h-[1.5em] mt-1.5 bg-primary"
                    aria-hidden
                  />
                  <h3 className="font-heading font-semibold text-lg md:text-xl leading-tight text-foreground">
                    {video.title}
                  </h3>
                </div>
                {video.youtubeUrl ? (
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 text-sm font-medium px-4 py-2.5 rounded-[10px] bg-primary text-primary-foreground hover:bg-primary-hover transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none w-fit"
                    aria-label={`Watch on YouTube: ${video.title}`}
                  >
                    <Play className="h-4 w-4 shrink-0" aria-hidden />
                    Watch on YouTube
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 rounded-[10px] border border-border bg-muted px-4 py-2.5 text-sm font-medium text-muted cursor-default w-fit"
                    aria-hidden
                  >
                    <Play className="h-4 w-4 shrink-0" aria-hidden />
                    Watch on YouTube
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
