import SectionContainer from "@/common/SectionContainer";
import SectionHeader from "@/common/SectionHeader";
import BlogCard from "@/common/BlogCard";
import blogsData from "@/data/blogs.json";
import GridBackground from "@/components/GridBackground";
import { BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Expert Insights on Dental Practice Management",
  description: "Expert insights on dental practice management, patient engagement, and growth strategies from PracticeDilly.",
  keywords: [
    "dental practice management",
    "dental practice blog",
    "patient communication",
    "dental software",
    "practice management tips",
  ],
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
      <div className="relative border-b border-[#e5e7eb] py-20">
        {/* Grid Background */}
        <GridBackground gridSize={1278 / 11} lineColor="#e5e7eb" contentWidth={960} contentPadding={64} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
            <SectionHeader
              icon={BookOpen}
              label="Blog"
              heading={{
                text: "Expert Insights on Dental Practice ",
                highlighted: "Management",
              }}
              description="Expert insights on dental practice management, patient engagement, and growth strategies"
            />
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <SectionContainer className="items-start px-4 md:px-8 lg:px-16">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[37px] max-w-[1280px] mx-auto border-t border-[#e5e7eb] pt-12">
            {blogsData.map((blog) => (
              <BlogCard
                key={blog.slug}
                slug={blog.slug}
                title={blog.title}
                description={blog.description}
                author={blog.author}
                date={blog.date}
                readTime={blog.readTime}
                category={blog.category}
                image={`/blog-images/${blog.slug}.png`}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
