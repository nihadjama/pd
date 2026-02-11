import SectionContainer from "@/common/SectionContainer";
import Image from "next/image";
import { Star } from "lucide-react";
import testimonials from "@/data/testimonials.json";
import { H2 } from "@/common/headings";

interface FeatureTestimonialSectionProps {
  testimonialId: string;
}

export default function FeatureTestimonialSection({
  testimonialId,
}: FeatureTestimonialSectionProps) {
  const testimonial = testimonials.find((t) => t.id === testimonialId);

  if (!testimonial) return null;

  return (
    <SectionContainer className="items-center">
      {/* Section Heading */}
      <div className="px-4 md:px-8 lg:px-12 w-full">
        <H2 className="text-center tracking-normal w-full">
          <span>What our </span>
          <span className="text-primary">clients say</span>
        </H2>
      </div>

      {/* Testimonial Card */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12 px-4 md:px-8 lg:px-12 w-full">
        {/* Author Image */}
        <div className="relative h-[280px] w-[240px] shrink-0 overflow-hidden rounded-xl bg-muted/20 md:h-[320px] md:w-[280px]">
          <Image
            src={testimonial.authorImage}
            alt={testimonial.authorName}
            fill
            sizes="(min-width: 768px) 280px, 240px"
            className="object-cover"
          />
        </div>

        {/* Quote Content */}
        <div className="flex flex-1 flex-col gap-5">
          {/* Decorative Quote Mark */}
          <svg
            width="56"
            height="40"
            viewBox="0 0 56 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary/15"
            aria-hidden="true"
          >
            <path
              d="M0 40V24.8C0 20.2667 0.8 16.0667 2.4 12.2C4.06667 8.26667 6.66667 4.4 10.2 0.6L17.4 5C14.8667 7.8 13 10.5 11.8 13.1C10.6667 15.6333 10.0667 18.4 10 21.4H18V40H0ZM30 40V24.8C30 20.2667 30.8 16.0667 32.4 12.2C34.0667 8.26667 36.6667 4.4 40.2 0.6L47.4 5C44.8667 7.8 43 10.5 41.8 13.1C40.6667 15.6333 40.0667 18.4 40 21.4H48V40H30Z"
              fill="currentColor"
            />
          </svg>

          {/* Quote Text */}
          <p className="font-sans text-base leading-relaxed text-foreground md:text-lg">
            {testimonial.quote}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="font-sans text-sm text-muted">
              {testimonial.rating} out of 5
            </span>
          </div>

          {/* Author Info + Practice Logo */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <p className="font-sans text-sm font-medium text-foreground">
                {testimonial.authorName}
              </p>
              <p className="font-sans text-sm text-muted">
                {testimonial.practiceName}
              </p>
            </div>

            {/* Practice Logo */}
            <div className="relative hidden h-14 w-[160px] shrink-0 sm:block">
              <Image
                src={testimonial.practiceLogo}
                alt={testimonial.practiceName}
                fill
                sizes="160px"
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
