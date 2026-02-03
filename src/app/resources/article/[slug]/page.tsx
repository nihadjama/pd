import { notFound } from "next/navigation";
import Link from "next/link";
import blogsData from "@/data/blogs.json";
import SectionContainer from "@/common/SectionContainer";
import { H1 } from "@/common/headings";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { generateBlogArticleSchema } from "@/utils/generateArticleSchema";
import { getAuthorSlugByName } from "@/utils/authors";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${blog.title} | PracticeDilly Articles`,
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

export default async function ArticleSlugPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const authorSlug = blog.author ? getAuthorSlugByName(blog.author) : undefined;
  const articleSchema = generateBlogArticleSchema({
    slug: blog.slug,
    title: blog.title,
    description: blog.description,
    date: blog.date,
    author: blog.author && authorSlug
      ? { slug: authorSlug, name: blog.author, role: blog.authorRole }
      : null,
    image: `/blog-images/${blog.slug}.png`,
    readTime: blog.readTime,
    category: blog.category,
  });

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="relative min-h-screen bg-background">
        {/* Back Link */}
      <SectionContainer className="px-4 md:px-8 lg:px-16 pt-8 pb-4">
        <Link
          href="/resources/article"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all articles</span>
        </Link>
      </SectionContainer>

      {/* Article Content */}
      <SectionContainer className="px-4 md:px-8 lg:px-16 py-12">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-6 mb-12">
            {/* Category */}
            <div className="flex items-center">
              <span className="text-xs font-medium text-primary bg-[rgba(94,72,240,0.1)] px-2.5 py-1 rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <H1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              {blog.title}
            </H1>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-muted">
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
                {authorSlug ? (
                  <Link
                    href={`/author/${authorSlug}`}
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {blog.author}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground">{blog.author}</span>
                )}
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
                    className="text-2xl font-heading font-semibold text-foreground mt-8 mb-4"
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
                  <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-foreground">
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
                    className="font-sans text-base leading-7 text-foreground mb-6"
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
        <SectionContainer className="px-4 md:px-8 lg:px-16 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/resources/article/${relatedBlog.slug}`}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-200"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium text-primary bg-[rgba(94,72,240,0.1)] px-2.5 py-1 rounded-full">
                      {relatedBlog.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">
                    {relatedBlog.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </SectionContainer>
      )}
      </div>
    </>
  );
}
