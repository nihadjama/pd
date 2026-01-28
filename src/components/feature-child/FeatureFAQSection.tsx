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
    <SectionContainer className="items-center md:items-start w-full">
      <div className="w-full flex flex-col md:flex-row border-t">
        <div className="border-border border-r border-b flex flex-col gap-4 items-center md:items-start justify-center md:justify-start px-4 md:px-8 lg:px-16 py-8 md:py-10 lg:py-14 relative shrink-0 w-full md:w-1/2">
          <HeadingWithHighlight
            text={heading.text}
            highlighted={heading.highlighted}
            className="text-center md:text-left"
          />
          <p className="font-sans font-normal leading-6 text-foreground text-base tracking-normal w-full text-center md:text-left">
            {description}
          </p>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
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
