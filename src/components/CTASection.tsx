import SectionContainer from "@/common/SectionContainer";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { Play } from "lucide-react";

export default function CTASection() {
  return (
    <SectionContainer className="items-center">
      <div className="w-full px-4 lg:px-16">
        <div className="flex flex-col gap-8 items-center max-w-[600px] mx-auto py-16">
          <HeadingWithHighlight
            text="Level up your practice. "
            highlighted="What say?"
            className="text-center"
          />
          <p className="font-sans font-normal text-base leading-6 text-[#262626] text-center">
            Join the fastest growing patient communication platform. Start your 30-day free trial today.
          </p>

          <div className="flex gap-4 items-center justify-center w-full">
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#5e48f0]" />
              <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
                No credit card required
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#5e48f0]" />
              <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
                14-day free trial
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-[#5e48f0]" />
              <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
                Cancel anytime
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center w-full">

            <button className="flex items-center justify-center rounded-[10px] bg-[#5e48f0] px-6 py-2.5 hover:bg-[#4d3ad0] transition-colors">
              <p className="text-sm font-medium leading-5 text-[#f9f9f9]">Get Demo</p>
            </button>


          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
