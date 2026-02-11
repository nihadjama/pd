import Image from "next/image";

interface FeaturePostHeroIntegrationsSectionProps {
  heading: string;
  logos: Array<{
    src: string;
    alt: string;
  }>;
}

export default function FeaturePostHeroIntegrationsSection({
  heading,
  logos,
}: FeaturePostHeroIntegrationsSectionProps) {
  return (
    <section className="border-b border-border bg-background py-10 md:py-12">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
        <h2 className="font-heading text-center text-2xl leading-tight text-foreground md:text-3xl">
          {heading}
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:mt-10 md:gap-x-16">
          {logos.map((logo) => (
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
    </section>
  );
}

