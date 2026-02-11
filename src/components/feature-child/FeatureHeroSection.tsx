import Button from "@/common/Button";
import Badge from "@/common/Badge";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Image from "next/image";
import HeroPill from "@/common/HeroPill";
import GridBackground from "@/components/GridBackground";
import Link from "next/link";
import { Play, Phone } from "lucide-react";

const storeBadgeBase =
  "inline-flex items-center gap-3 rounded-[10px] border border-border bg-card px-4 py-3 text-left transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

/** App Store badge – matches site tokens, two-line official-style layout */
function AppStoreBadge({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className={storeBadgeBase} aria-label={label}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground text-background" aria-hidden>
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      </span>
      <span className="flex flex-col">
        <span className="font-sans text-[10px] leading-tight text-muted-foreground">Download on the</span>
        <span className="font-heading text-sm font-semibold tracking-tight text-foreground">App Store</span>
      </span>
    </Link>
  );
}

/** Google Play badge – matches site tokens, two-line official-style layout; play triangle icon */
function GooglePlayBadge({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className={storeBadgeBase} aria-label={label}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground text-background" aria-hidden>
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
          <path d="M8 5v14l11-7L8 5z" />
        </svg>
      </span>
      <span className="flex flex-col">
        <span className="font-sans text-[10px] leading-tight text-muted-foreground">Get it on</span>
        <span className="font-heading text-sm font-semibold tracking-tight text-foreground">Google Play</span>
      </span>
    </Link>
  );
}

interface FeatureHeroSectionProps {
  category?: {
    icon: string;
    text: string;
  };
  heading: {
    text: string;
    highlighted?: string;
    suffix?: string;
  };
  description: string;
  cta: {
    text: string;
    href: string;
    icon?: string;
  };
  /** When set, show App Store + Google Play buttons instead of single CTA */
  appStore?: { href: string; label: string };
  googlePlay?: { href: string; label: string };
  badges?: string[];
  image: string;
  phone?: {
    number: string;
    display: string;
  };
  poweredBy?: {
    name: string;
    logo?: string;
  };
  /** When true, no category pill and plain heading (single-line title) */
  cleanLayout?: boolean;
}

export default function FeatureHeroSection({
  category,
  heading,
  description,
  cta,
  appStore,
  googlePlay,
  badges,
  image,
  phone,
  poweredBy,
  cleanLayout = false,
}: FeatureHeroSectionProps) {
  const showCategoryPill = !!category && !phone && !poweredBy && !cleanLayout;
  const plainHeading = !heading.highlighted;
  const showStoreButtons = appStore && googlePlay;

  return (
    <section className="relative flex min-h-[600px] md:min-h-[80vh] items-center justify-center w-full bg-background py-12 md:py-16 border-b border-border">
      <GridBackground gridSize={1280 / 9} contentWidth={1280} contentPadding={64} />

      <div className="flex w-full flex-col items-center gap-8 md:gap-16 lg:gap-20 relative z-10">
        <div className="flex max-w-[1280px] md:flex-row items-center flex-col gap-6 md:gap-12 w-full px-4 md:px-8 lg:px-12">
          {/* Left column: heading, description, CTA */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 flex-1">
            <div className="flex flex-col gap-6 md:gap-8 w-full">
              <div className="flex flex-col gap-4 md:gap-6 justify-center md:justify-start items-center md:items-start w-full">
                {showCategoryPill && (
                  <HeroPill icon={category!.icon} text={category!.text} as="h1" />
                )}

                {plainHeading ? (
                  <h1 className="font-heading font-medium text-foreground text-center md:text-left w-full text-[32px] leading-[36px] md:text-[52px] md:leading-[56px] lg:text-[60px] lg:leading-[64px] tracking-normal">
                    {heading.text}
                    {heading.suffix ?? ""}
                  </h1>
                ) : (
                  <HeadingWithHighlight
                    text={heading.text}
                    highlighted={heading.highlighted}
                    suffix={heading.suffix ?? ""}
                    className="text-center md:text-left w-full"
                    as={showCategoryPill ? "h2" : "h1"}
                  />
                )}

                <p className="font-sans font-normal leading-6 text-foreground text-base tracking-normal max-w-[572px] w-full text-center md:text-left">
                  {description}
                </p>
              </div>

              <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start w-full">
                  {showStoreButtons ? (
                    <div className="flex flex-wrap items-stretch gap-4">
                      <AppStoreBadge href={appStore!.href} label={appStore!.label} />
                      <GooglePlayBadge href={googlePlay!.href} label={googlePlay!.label} />
                    </div>
                  ) : (
                    <Button
                      href={cta.href}
                      variant="primary"
                      className="flex items-center justify-center w-full md:w-auto gap-2"
                    >
                      {cta.icon === "Play" && (
                        <Play className="h-5 w-5 shrink-0" aria-hidden="true" />
                      )}
                      {cta.text}
                    </Button>
                  )}

                  {phone && (
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground font-medium">OR</span>
                      <a
                        href={`tel:${phone.number}`}
                        className="inline-flex items-center gap-2 text-foreground font-medium text-sm hover:text-primary transition-colors"
                        aria-label={`Call ${phone.display}`}
                      >
                        <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                        {phone.display}
                      </a>
                    </div>
                  )}
                </div>

                {poweredBy && (
                  <div className="flex justify-center md:justify-start w-full">
                    <div className="inline-flex items-center gap-1.5 border border-border rounded-md px-2.5 py-1.5">
                      <span className="text-xs text-muted-foreground">Powered by</span>
                      <span className="text-sm font-bold text-primary tracking-tight">
                        {poweredBy.name}
                      </span>
                    </div>
                  </div>
                )}

                {!cleanLayout && badges && badges.length > 0 && (
                  <div className="flex flex-wrap gap-3 md:gap-4 items-center md:items-start justify-center md:justify-start px-0 w-full">
                    {badges.map((badge, index) => (
                      <Badge key={index} text={badge} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right column: illustration */}
          <div className="md:w-1/2 w-full flex items-center justify-center px-4 md:px-0">
            <Image
              src={image || ""}
              alt={heading.text}
              width={600}
              height={600}
              priority
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
