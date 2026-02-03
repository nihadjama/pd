import SectionContainer from "@/common/SectionContainer";
import Button from "@/common/Button";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";

interface IntegrationCTASectionProps {
  heading: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  note: string;
}

export default function IntegrationCTASection({
  heading,
  description,
  primaryCta,
  secondaryCta,
  note,
}: IntegrationCTASectionProps) {
  return (
    <SectionContainer className="items-center border-t border-border">
      <div className="flex flex-col gap-8 items-center w-full max-w-[600px] px-4">
        <div className="flex flex-col gap-4 items-center text-center">
          <HeadingWithHighlight text={heading} className="font-medium text-center" />
          <p className="font-sans font-normal text-base leading-6 text-muted">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <Button href={primaryCta.href} variant="primary" className="flex items-center justify-center w-full sm:w-auto">
            {primaryCta.text}
          </Button>
          <Button href={secondaryCta.href} variant="secondary" className="flex items-center justify-center w-full sm:w-auto">
            {secondaryCta.text}
          </Button>
        </div>

        <p className="font-sans font-normal text-sm leading-5 text-muted text-center">
          {note}
        </p>
      </div>
    </SectionContainer>
  );
}
