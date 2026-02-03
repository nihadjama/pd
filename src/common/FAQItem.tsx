"use client";

import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  /** Unique id for the accordion section (e.g. faq-home-0). Used for aria-controls and id. */
  id: string;
}

export default function FAQItem({ question, answer, isOpen, onToggle, id }: FAQItemProps) {
  const answerId = `${id}-answer`;
  return (
    <div className="border-border border-b">
      <button
        id={id}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="border-border flex flex-col items-start px-4 md:px-8 lg:px-12 py-4 relative shrink-0 w-full md:w-full text-left focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset focus-visible:outline-none"
      >
        <div className="flex items-start relative shrink-0 w-full">
          <div className="flex flex-col grow items-start min-w-0 shrink-0 w-full">
            <div className={`${ isOpen ?  "border-border" :"border-transparent"} border-b flex gap-10 items-start px-0 py-5 relative shrink-0 w-full`}>
              <span className="font-sans font-medium leading-6 text-foreground text-base text-left tracking-normal flex-1">
                {question}
              </span>
              <div
                className={`flex items-center justify-center relative shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <ChevronDown className="size-6 text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <div
          id={answerId}
          role="region"
          aria-labelledby={id}
          className="flex items-center justify-center px-4 md:px-8 lg:px-12 pb-4 md:pb-4 lg:pb-4 relative shrink-0 w-full border-transparent border-b"
        >
          <p className="font-sans font-normal leading-5 text-muted text-sm text-left tracking-normal w-full">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
