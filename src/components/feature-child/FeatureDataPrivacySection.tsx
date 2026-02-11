import { getIcon } from "@/utils/iconMap";

export interface DataPrivacyCard {
  icon: string;
  title: string;
  description: string;
}

interface FeatureDataPrivacySectionProps {
  heading: string;
  cards: DataPrivacyCard[];
}

export default function FeatureDataPrivacySection({
  heading,
  cards,
}: FeatureDataPrivacySectionProps) {
  return (
    <section
      className="relative flex flex-col gap-10 md:gap-12 max-w-7xl mx-auto py-12 md:py-16 lg:py-20 border-x border-border overflow-hidden"
      aria-labelledby="data-privacy-heading"
    >
      {/* Subtle gradient: light top-left to soft primary tint bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--background)) 40%, hsl(252 87% 62% / 0.04) 100%)",
        }}
      />

      <h2
        id="data-privacy-heading"
        className="font-heading font-semibold text-foreground text-xl md:text-2xl lg:text-3xl text-center px-4 md:px-8 lg:px-12"
      >
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-8 lg:px-12">
        {cards.map((card, index) => {
          const IconComponent = getIcon(card.icon);
          return (
            <article
              key={index}
              className="flex flex-col rounded-xl border border-border bg-card p-6 md:p-8 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)]"
            >
              <div className="flex flex-col gap-4 flex-1">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                  aria-hidden
                >
                  {IconComponent ? (
                    <IconComponent className="h-6 w-6" />
                  ) : (
                    <span className="h-6 w-6 rounded-full bg-primary/20" />
                  )}
                </div>
                <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-foreground leading-tight">
                  {card.title}
                </h3>
                <p className="font-sans font-normal text-sm leading-6 text-muted tracking-normal flex-1">
                  {card.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
