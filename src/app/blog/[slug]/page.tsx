import { notFound } from "next/navigation";
import Link from "next/link";
import blogsData from "@/data/blogs.json";
import SectionContainer from "@/common/SectionContainer";
import { H1 } from "@/common/headings";
import ImageWithFallback from "@/common/ImageWithFallback";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${blog.title} | PracticeDilly Blog`,
    description: blog.description,
    keywords: [
      "dental practice management",
      "dental practice blog",
      blog.category.toLowerCase(),
      ...blog.description.split(" ").slice(0, 5),
    ],
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      images: [`/blog-images/${blog.slug}.png`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Find related blogs (same category, excluding current)
  const relatedBlogs = blogsData
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3);

  // Parse markdown-like content into paragraphs
  const contentParagraphs = blog.content.split("\n\n").filter((p) => p.trim());

  return (
    <div className="relative min-h-screen bg-[#f9f9f9]">
      {/* Back Link */}
      <SectionContainer className="px-4 md:px-8 lg:px-16 pt-8 pb-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all articles</span>
        </Link>
      </SectionContainer>

      {/* Hero Image */}
      {/* <div className="relative w-full h-64 md:h-96 bg-gradient-to-br from-[#5e48f0]/10 to-[#5e48f0]/5 border-y border-[#e5e7eb]">
        <ImageWithFallback
          src={`/blog-images/${blog.slug}.png`}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div> */}

      {/* Article Content */}
      <SectionContainer className="px-4 md:px-8 lg:px-16 py-12">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-6 mb-12">
            {/* Category */}
            <div className="flex items-center">
              <span className="text-xs font-medium text-[#5e48f0] bg-[rgba(94,72,240,0.1)] px-2.5 py-1 rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <H1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#262626] leading-tight">
              {blog.title}
            </H1>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-[#606060]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#262626]">{blog.author}</span>
                {blog.authorRole && (
                  <>
                    <span>•</span>
                    <span>{blog.authorRole}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {contentParagraphs.map((paragraph, index) => {
              // Check if it's a heading
              if (paragraph.startsWith("## ")) {
                const headingText = paragraph.replace("## ", "");
                return (
                  <h2
                    key={index}
                    className="text-2xl font-heading font-semibold text-[#262626] mt-8 mb-4"
                  >
                    {headingText}
                  </h2>
                );
              }

              // Check if it's a list item
              if (paragraph.startsWith("- ")) {
                const listItems = paragraph
                  .split("\n")
                  .filter((line) => line.trim().startsWith("- "))
                  .map((line) => line.replace("- ", "").trim());

                return (
                  <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-[#262626]">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="font-sans text-base leading-6">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Regular paragraph
              if (paragraph.trim()) {
                return (
                  <p
                    key={index}
                    className="font-sans text-base leading-7 text-[#262626] mb-6"
                  >
                    {paragraph}
                  </p>
                );
              }

              return null;
            })}
          </div>
        </article>
      </SectionContainer>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <SectionContainer className="px-4 md:px-8 lg:px-16 border-t border-[#e5e7eb]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-heading font-semibold text-[#262626] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blog/${relatedBlog.slug}`}
                  className="group bg-white border border-[#e5e7eb] rounded-xl p-6 hover:border-[#5e48f0] transition-all duration-200"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium text-[#5e48f0] bg-[rgba(94,72,240,0.1)] px-2.5 py-1 rounded-full">
                      {relatedBlog.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-[#262626] mb-2 group-hover:text-[#5e48f0] transition-colors line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-sm text-[#606060] line-clamp-2">
                    {relatedBlog.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </SectionContainer>
      )}
    </div>
  );
}
