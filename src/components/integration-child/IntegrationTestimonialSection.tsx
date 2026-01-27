import SectionContainer from "@/common/SectionContainer";
import TestimonialCard from "@/common/TestimonialCard";
import { findTestimonialByAuthor, findTestimonialById } from "@/utils/testimonialMapper";

interface IntegrationTestimonialSectionProps {
  quote?: string;
  author?: {
    name: string;
    role: string;
    company: string;
    avatar?: string;
  };
  rating?: number;
  testimonialId?: string;
}

export default function IntegrationTestimonialSection({
  quote,
  author,
  rating,
  testimonialId,
}: IntegrationTestimonialSectionProps) {
  // If testimonialId is provided, use it to find the full testimonial
  // Otherwise, try to find by author name, or use the provided props
  let testimonial = null;
  
  if (testimonialId) {
    testimonial = findTestimonialById(testimonialId);
  } else if (author?.name) {
    testimonial = findTestimonialByAuthor(author.name);
  }
  
  // Use testimonial data if found, otherwise fall back to provided props
  const finalQuote = testimonial?.quote || quote || "";
  const finalRating = testimonial?.rating || rating || 5;
  const finalName = testimonial?.authorName || author?.name || "";
  const finalRole = testimonial?.authorTitle || author?.role || "";
  const finalCompany = testimonial?.practiceName || author?.company || "";
  const finalAuthorImage = testimonial?.authorImage;
  const finalPracticeLogo = testimonial?.practiceLogo;

  return (
    <SectionContainer className="items-center">
      <div className="flex flex-col items-center w-full max-w-[800px]">
        <TestimonialCard
          name={finalName}
          role={finalRole}
          company={finalCompany}
          quote={finalQuote}
          rating={finalRating}
          authorImage={finalAuthorImage}
          practiceLogo={finalPracticeLogo}
        />
      </div>
    </SectionContainer>
  );
}
