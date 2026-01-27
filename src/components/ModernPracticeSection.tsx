"use client";

import { useState } from "react";
import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import { getIcon } from "@/utils/iconMap";
import AttractPatientsUI from "@/common/ui-animation/AttractPatientsUI";
import RunSmootherDayUI from "@/common/ui-animation/RunSmootherDayUI";
import BringThemBackUI from "@/common/ui-animation/BringThemBackUI";

export default function ModernPracticeSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const features = [
    {
      icon: "Magnet",
      title: "Attract patients",
      description:
        "Keep patients engaged between visits. Patients show up, rebook, and stay loyal without extra front-desk effort.",
      uiComponent: <AttractPatientsUI />,
    },
    {
      icon: "Sun",
      title: "Run a smoother day",
      description:
        "Run your entire patient journey from one workspace. Every interaction moves patients from first contact to completed treatment.",
      uiComponent: <RunSmootherDayUI />,
    },
    {
      icon: "Route",
      title: "Bring them back",
      description:
        "Keep patients for years, not months. Automated recall and reactivation campaigns that fill your schedule.",
      uiComponent: <BringThemBackUI />,
    },
  ];

  const selectedFeature = features[selectedIndex];

  return (
    <SectionContainer className="items-start border-t border-[#e5e7eb]">
      <div className="w-full">
        <div className="flex flex-col gap-10 items-center mb-10">
          <SectionHeader
            heading={{
              text: "Everything You Need To Run a ",
              highlighted: "Modern Practice",
            }}
            description="A complete platform that helps you attract, manage, and retain patients without the manual admin tasks."
            className="max-w-[565px]"
          />
        </div>

        {/* Two-column layout: List on left, UI on right */}
        <div className="flex flex-col md:flex-row items-start border-t border-[#e5e7eb]">
          {/* Left: Feature List */}
          <div className="flex flex-col md:w-1/2 w-full border-r border-[#e5e7eb] justify-between ">
            {features.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              const isSelected = index === selectedIndex;
              
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex gap-6 items-start text-left px-20 py-8 min-h-[160px] border-b transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#5e48f0] bg-white"
                      : "border-[#e5e7eb] hover:border-[#5e48f0] hover:bg-[rgba(94,72,240,0.02)]"
                  }`}
                >
                  <div className="flex items-center pt-1">
                    <div
                      className={`flex items-center p-2 rounded-[10px] shrink-0 transition-all ${
                        isSelected
                          ? "bg-[rgba(94,72,240,0.1)] border border-[rgba(94,72,240,0.25)]"
                          : "bg-[rgba(94,72,240,0.05)] border border-[rgba(94,72,240,0.1)]"
                      }`}
                    >
                      {IconComponent && (
                        <div className="relative shrink-0 size-6 text-[#5e48f0]">
                          <IconComponent className="w-full h-full" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p
                      className={`font-sans font-normal leading-6 text-base tracking-normal transition-colors ${
                        isSelected ? "text-[#262626]" : "text-[#262626]"
                      }`}
                    >
                      {feature.title}
                    </p>
                    <p className="font-sans font-normal leading-5 text-[#606060] text-sm tracking-normal min-h-[60px]">
                      {feature.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Animated UI Component */}
          <div className="md:w-1/2 w-full flex bg-[#5e48f0] p-12 min-h-[480px]">
            <div className="w-full transition-opacity flex justify-center items-center" key={selectedIndex}>
              {selectedFeature.uiComponent}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
