import SectionContainer from "@/common/SectionContainer";
import Image from "next/image";
import Link from "next/link";

interface FeaturePaperlessVideoSectionProps {
  heading: string;
  videoUrl: string;
  youtubeWatchUrl: string;
  trustedHeading: string;
  trustedLogos: Array<{ src: string; alt: string }>;
}

export default function FeaturePaperlessVideoSection({
  heading,
  videoUrl,
  youtubeWatchUrl,
  trustedHeading,
  trustedLogos,
}: FeaturePaperlessVideoSectionProps) {
  return (
    <SectionContainer id="know-how" className="items-center border-t">
      {/* Heading */}
      <div className="px-4 md:px-8 lg:px-12 w-full text-center">
        <h2 className="font-heading font-medium text-foreground text-[28px] leading-[32px] md:text-[36px] md:leading-[40px] lg:text-[44px] lg:leading-[48px] tracking-normal">
          Send <span className="text-primary">paperless forms</span> to your patients. Know how.
        </h2>
      </div>

      {/* Video block – rounded container with accent background + Watch on YouTube */}
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[900px] overflow-hidden rounded-2xl border border-border bg-primary/5 p-4 md:p-6">
          {/* Optional overlay card text – "Send Paperless Forms" */}
          <div className="absolute left-4 md:left-6 top-1/2 z-10 -translate-y-1/2 hidden md:block">
            <div className="rounded-xl border border-border bg-card px-4 py-3 shadow-md">
              <p className="font-heading font-semibold text-foreground text-lg leading-tight whitespace-nowrap">
                Send Paperless Forms
              </p>
            </div>
          </div>

          {/* Video embed */}
          <div className="relative w-full overflow-hidden rounded-xl bg-card" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={videoUrl}
              title="How to send paperless forms to your patients"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full rounded-xl"
            />
          </div>

          {/* Watch on YouTube button */}
          <div className="mt-4 flex justify-start">
            <Link
              href={youtubeWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#282828] px-4 py-2.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch on YouTube
            </Link>
          </div>
        </div>
      </div>

      {/* Trusted by */}
      <div className="w-full border-t border-border pt-10 md:pt-14 px-4 md:px-8 lg:px-12">
        <h3 className="font-heading text-center text-lg font-medium text-foreground md:text-xl">
          {trustedHeading}
        </h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:mt-10 md:gap-x-14">
          {trustedLogos.map((logo) => (
            <div key={logo.src} className="relative h-9 w-[120px] md:h-10 md:w-[140px] grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(min-width: 768px) 140px, 120px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
