import testimonialsData from "@/data/testimonials.json";

interface Testimonial {
  id: string;
  practiceName: string;
  practiceLogo?: string;
  quote: string;
  rating: number;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
}

/**
 * Find a testimonial by author name (partial match)
 */
export function findTestimonialByAuthor(authorName: string): Testimonial | undefined {
  const testimonials = testimonialsData as Testimonial[];
  return testimonials.find((testimonial) =>
    testimonial.authorName.toLowerCase().includes(authorName.toLowerCase()) ||
    authorName.toLowerCase().includes(testimonial.authorName.toLowerCase())
  );
}

/**
 * Find a testimonial by practice name (partial match)
 */
export function findTestimonialByPractice(practiceName: string): Testimonial | undefined {
  const testimonials = testimonialsData as Testimonial[];
  return testimonials.find((testimonial) =>
    testimonial.practiceName.toLowerCase().includes(practiceName.toLowerCase()) ||
    practiceName.toLowerCase().includes(testimonial.practiceName.toLowerCase())
  );
}

/**
 * Find a testimonial by ID
 */
export function findTestimonialById(id: string): Testimonial | undefined {
  const testimonials = testimonialsData as Testimonial[];
  return testimonials.find((testimonial) => testimonial.id === id);
}

/**
 * Get all testimonials
 */
export function getAllTestimonials(): Testimonial[] {
  return testimonialsData as Testimonial[];
}
