import SectionContainer from "@/common/SectionContainer";
import Button from "@/common/Button";
import { H2 } from "@/common/headings";

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
    <SectionContainer className="items-center border-t border-[#e5e7eb]">
      <div className="flex flex-col gap-8 items-center w-full max-w-[600px] px-4">
        <div className="flex flex-col gap-4 items-center text-center">
          <H2 className="font-medium text-3xl leading-[36px]">
            {heading}
          </H2>
          <p className="font-sans font-normal text-base leading-6 text-[#606060]">
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

        <p className="font-sans font-normal text-sm leading-5 text-[#606060] text-center">
          {note}
        </p>
      </div>
    </SectionContainer>
  );
}
