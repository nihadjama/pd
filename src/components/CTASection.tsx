import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import Button from "@/common/Button";
import { ArrowRight, Check } from "lucide-react";

export default function CTASection() {
  return (
    <SectionContainer className="items-center bg-[#5e48f0]">
      <div className="w-full px-4 lg:px-16">
        {/* Main CTA Card with border and background */}
        <div className="flex flex-col gap-8 items-center max-w-4xl mx-auto py-12 md:py-16 px-6 md:px-8 lg:px-12 rounded-2xl border border-[#e5e7eb] bg-linear-to-b from-white to-[#fafafa]">
          <div className="flex flex-col gap-6 items-center text-center">
            <HeadingWithHighlight
              text="Ready to transform your practice? "
              highlighted="Start free today"
              className="text-center md:text-5xl! md:leading-[56px]!"
              as="h2"
            />
            <p className="font-sans font-normal text-lg leading-7 text-[#262626] text-center max-w-[560px]">
              Join <span className="font-semibold text-[#5e48f0]">500+ dental practices</span> already using PracticeDilly to streamline patient communication and grow their practice.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-white border border-[#e5e7eb]">
              <div className="shrink-0 h-5 w-5 rounded-full bg-[#5e48f0]/10 flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-[#5e48f0]" strokeWidth={2.5} />
              </div>
              <p className="font-sans font-medium text-sm leading-5 text-[#262626]">
                No credit card
              </p>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-white border border-[#e5e7eb]">
              <div className="shrink-0 h-5 w-5 rounded-full bg-[#5e48f0]/10 flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-[#5e48f0]" strokeWidth={2.5} />
              </div>
              <p className="font-sans font-medium text-sm leading-5 text-[#262626]">
                30-day free trial
              </p>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-white border border-[#e5e7eb]">
              <div className="shrink-0 h-5 w-5 rounded-full bg-[#5e48f0]/10 flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-[#5e48f0]" strokeWidth={2.5} />
              </div>
              <p className="font-sans font-medium text-sm leading-5 text-[#262626]">
                Cancel anytime
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col gap-3 items-center w-full">
            <Button 
              variant="primary"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
              className="w-full sm:w-auto px-8 py-3 text-base font-medium"
            >
              Get Started Free
            </Button>
            <p className="font-sans font-normal text-xs leading-4 text-[#606060] text-center">
              Setup takes less than 5 minutes • No commitment required
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
