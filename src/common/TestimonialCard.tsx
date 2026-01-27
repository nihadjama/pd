import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  authorImage?: string;
  practiceLogo?: string;
  testimonialType?: "big-picture" | "small-picture";
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
  rating,
  authorImage,
  practiceLogo,
  testimonialType, 
}: TestimonialCardProps) {
  return (
    <div className="shrink-0 w-[500px] bg-white border border-[#f0f0f0] rounded-xl overflow-hidden">
      <div className="flex flex-col gap-6">
        {/* Author */}
        <div className="flex items-center gap-4 border-b border-[#f0f0f0] px-6 py-6">
          {authorImage && (
            <div className={`relative shrink-0 overflow-hidden rounded-full ${
              testimonialType === "big-picture" ? "h-20 w-20" : "h-12 w-12"
            }`}>
              <Image
                src={authorImage}
                alt={name}
                fill
                className="object-cover"
                sizes={testimonialType === "big-picture" ? "80px" : "48px"}
              />
            </div>
          )}
          <div className="flex flex-col flex-1 min-w-0">
            <p className="font-sans font-normal text-base leading-6 text-[#262626]">{name}</p>
            <p className="font-sans font-normal text-sm leading-5 text-[#606060]">
              {company}
            </p>
          </div>
          {/* {practiceLogo && (
            <div className="relative h-10 w-24 shrink-0">
              <Image
                src={practiceLogo}
                alt={`${company} logo`}
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          )} */}
        </div>

        {/* Rating */}
        <div className="flex gap-1 items-center px-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-[#fbbf24] fill-[#fbbf24]" : "text-[#e5e7eb]"
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <p className="font-sans font-normal text-base leading-6 text-[#262626] px-6 pb-6">
          "{quote}"
        </p>
      </div>
    </div>
  );
}
