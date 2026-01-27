"use client";

import SectionContainer from "@/common/SectionContainer";
import FAQItem from "@/common/FAQItem";
import HeadingWithHighlight from "@/common/HeadingWithHighlight";
import { useState } from "react";

interface FAQItemData {
  question: string;
  answer: string;
}

interface FeatureFAQSectionProps {
  heading: {
    text: string;
    highlighted: string;
  };
  description: string;
  items: FAQItemData[];
}

export default function FeatureFAQSection({
  heading,
  description,
  items,
}: FeatureFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer className="items-center border-[#e5e7eb] w-full">
      <div className="border-[#e5e7eb] border-b flex flex-col gap-4 items-start justify-start px-4 md:px-8 lg:px-16 py-8 md:py-10 lg:py-14 relative shrink-0 w-full md:w-1/2">
        <HeadingWithHighlight
          text={heading.text}
          highlighted={heading.highlighted}
        />
        <p className="font-sans font-normal leading-6 text-[#262626] text-base tracking-normal w-full">
          {description}
        </p>
      </div>

      <div className="flex w-full justify-center">

        <div className="flex flex-col border-[#e5e7eb] max-w-1/2 w-full">
        {items.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
        </div>
      </div>
    </SectionContainer>
  );
}
