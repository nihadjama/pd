import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import Button from "@/common/Button";
import { H3 } from "@/common/headings";
import { Check, ArrowRight } from "lucide-react";

export default function PricingSection() {
  const singleLocationFeatures = [
    "Simple setup in under 15 minutes",
    "All-in-one communication hub",
    "Affordable pricing with no hidden fees",
    "Seamless PMS integration",
  ];

  const multiLocationFeatures = [
    "Centralized dashboard for all locations",
    "Consistent patient experience across locations",
    "Volume pricing and dedicated support",
    "Advanced analytics and reporting",
    "Custom workflows for each location",
  ];

  return (
    <SectionContainer className="items-start">
      <div className="w-full px-4 lg:px-16">
        <div className="flex flex-col gap-10 items-center mb-10">
          <SectionHeader
            heading={{
              text: "Built for Practices of ",
              highlighted: "Every Size",
            }}
            description="Whether you run one location or manage a multi-location group, PracticeDilly scales with your practice."
            className="max-w-[600px]"
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] mx-auto mb-8">
          {/* Single Location */}
          <div className="bg-white border border-[#e5e7eb] flex flex-col gap-6 hover:border-[#5e48f0] transition-all duration-200 h-full">
            <div className="flex flex-col gap-2 p-6 md:p-8">
              <H3 className="font-semibold text-2xl leading-7">
                Single Location
              </H3>
              <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
                Everything you need to run a modern, efficient dental practice from day one.
              </p>
            </div>

            <ul className="flex flex-col">
              {singleLocationFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 p-6 md:p-8 md:py-4 border-t">
                  <Check className="w-5 h-5 text-[#5e48f0] shrink-0 mt-0.5" />
                  <span className="font-sans font-normal text-sm leading-5 text-[#262626]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 p-6 md:p-8 border-t border-[#e5e7eb]">
              <p className="font-sans font-medium text-sm leading-5 text-[#262626]">
                Join 400+ single-location practices
              </p>
              <p className="font-sans font-normal text-sm leading-5 text-[#606060] italic">
                "Easy to use and incredibly powerful. Has saved us so much time." - Dr. Shivani Patel, Grand Central Dentistry
              </p>
            </div>
          </div>

          {/* Multi-Location Groups */}
          <div className="bg-white border-2 border-[#5e48f0] flex flex-col gap-6 relative hover:shadow-lg transition-all duration-200 h-full">
            <div className="absolute top-4 right-4">
              <div className="bg-[#5e48f0] text-[#f9f9f9] px-3 py-1 rounded-lg">
                <p className="font-sans font-medium text-xs leading-4">Most Popular</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-6 md:p-8">
              <H3 className="font-semibold text-2xl leading-7">
                Multi-Location Groups
              </H3>
              <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
                Manage all your locations from one dashboard with enterprise-grade features.
              </p>
            </div>

            <ul className="flex flex-col">
              {multiLocationFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 p-6 md:p-8 md:py-4 border-t">
                  <Check className="w-5 h-5 text-[#5e48f0] shrink-0 mt-0.5" />
                  <span className="font-sans font-normal text-sm leading-5 text-[#262626]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 p-6 md:p-8 border-t border-[#e5e7eb]">
              <p className="font-sans font-medium text-sm leading-5 text-[#262626]">
                Trusted by 100+ multi-location groups
              </p>
              <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
                "Scaled seamlessly across multiple locations. Game-changer for our practice group." - Pacific Ocean Dental Group
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex flex-col gap-2 items-center max-w-[600px] mx-auto mb-12">
          <p className="font-sans font-normal text-sm leading-5 text-[#606060] text-center">
            From startups to established groups, PracticeDilly grows with you
          </p>
          <div className="flex items-center gap-4">
            <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
              No contracts
            </p>
            <span className="text-[#e5e7eb]">•</span>
            <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
              Cancel anytime
            </p>
            <span className="text-[#e5e7eb]">•</span>
            <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
              Add locations as you grow
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col gap-6 items-center max-w-[600px] mx-auto pt-8 border-t border-[#e5e7eb]">
          <div className="flex flex-col gap-3 items-center text-center">
            <h3 className="font-heading font-semibold text-2xl leading-7 text-[#262626]">
              Ready to get started?
            </h3>
            <p className="font-sans font-normal text-base leading-6 text-[#606060]">
              Join hundreds of practices already using PracticeDilly to streamline their operations.
            </p>
          </div>
          <Button
            variant="primary"
            icon={<ArrowRight className="h-5 w-5" />}
            iconPosition="right"
            className="px-8 py-3 text-base font-medium"
          >
            Start Free Trial
          </Button>
          <p className="font-sans font-normal text-xs leading-4 text-[#606060] text-center">
            Setup takes less than 15 minutes • No credit card required
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
