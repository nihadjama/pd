import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionContainer from "@/common/SectionContainer";
import { H1 } from "@/common/headings";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import {
  getDemoVideoBySlug,
  getRelatedDemoVideos,
  getAllDemoVideoSlugs,
} from "@/utils/demoVideos";
import { generateDemoVideoSchema } from "@/utils/generateVideoSchema";
import DemoVideoCard from "../DemoVideoCard";
import { ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDemoVideoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = getDemoVideoBySlug(slug);
  if (!video) {
    return { title: "Video Not Found" };
  }
  return {
    title: video.title,
    description: `Watch: ${video.title}. ${video.categoryName} demo video.`,
    alternates: {
      canonical: `https://practicedilly.com/resources/demo-videos/${slug}`,
    },
    openGraph: {
      title: `${video.title} | PracticeDilly Demo`,
      description: `${video.categoryName} – ${video.title}`,
      url: `https://practicedilly.com/resources/demo-videos/${slug}`,
    },
  };
}

export default async function DemoVideoSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const video = getDemoVideoBySlug(slug);
  if (!video) notFound();

  const related = getRelatedDemoVideos(slug, video.categoryId);
  const steps = video.steps ?? [];
  const videoSchema = generateDemoVideoSchema({
    slug: video.slug,
    title: video.title,
    categoryName: video.categoryName,
    duration: video.duration,
    youtubeId: video.youtubeId,
  });

  return (
    <div className="relative min-h-screen bg-background" data-page="demo-video">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <SectionContainer className="px-4 md:px-8 lg:px-16 pt-8 pb-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="size-4 shrink-0" aria-hidden />
          <Link href="/resources/demo-videos" className="hover:text-primary transition-colors">
            Demo Videos
          </Link>
          <ChevronRight className="size-4 shrink-0" aria-hidden />
          <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
            {video.title}
          </span>
        </nav>
      </SectionContainer>

      <SectionContainer className="px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* Category */}
          <div>
            <Link
              href={`/resources/demo-videos#${video.categoryId}`}
              className="text-xs font-medium uppercase tracking-wide text-primary hover:underline"
            >
              {video.categoryName}
            </Link>
          </div>

          {/* Title */}
          <H1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            {video.title}
          </H1>

          {/* YouTube embed */}
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
            {video.youtubeId ? (
              <iframe
                title={video.title}
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-muted font-sans text-sm">
                Video embed will appear here when YouTube ID is set.
              </div>
            )}
          </div>

          {/* Steps (timestamped content) */}
          {steps.length > 0 && (
            <ol className="list-none p-0 m-0 flex flex-col gap-6">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary font-sans text-sm font-medium">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-base leading-6 text-foreground">
                      {step.text}
                      {step.time != null && step.time !== "" && (
                        <span className="ml-2 font-mono text-sm text-muted">
                          {" "}{step.time}
                        </span>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}

          {/* Related Videos */}
          {related.length > 0 && (
            <div className="border-t border-border pt-12">
              <HeadingWithHighlight text="Related Videos" className="text-xl md:text-2xl mb-6" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
                {related.map((r) => (
                  <li key={r.id}>
                    <DemoVideoCard video={r} categoryName={r.categoryName} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </SectionContainer>
    </div>
  );
}
