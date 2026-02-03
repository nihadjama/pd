import { notFound } from "next/navigation";
import Link from "next/link";
import SectionContainer from "@/common/SectionContainer";
import { H1 } from "@/common/headings";
import { ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";
import { getAuthorBySlug, getAllAuthors } from "@/utils/authors";
import { generateAuthorProfileSchema } from "@/utils/generateArticleSchema";
import blogsData from "@/data/blogs.json";
import BlogCard from "@/common/BlogCard";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuthors().map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return {
      title: "Author Not Found",
    };
  }

  return {
    title: `${author.name} | PracticeDilly Blog`,
    description: author.bio || `Articles by ${author.name} on dental practice management and patient engagement.`,
    openGraph: {
      title: `${author.name} | PracticeDilly Blog`,
      description: author.bio || `Articles by ${author.name}`,
      type: "profile",
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const authorBlogs = (blogsData as Array<{ slug: string; author?: string }>).filter(
    (b) => b.author?.toLowerCase() === author.name.toLowerCase()
  );

  const schemas = generateAuthorProfileSchema(author);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="relative min-h-screen bg-background">
        <SectionContainer className="px-4 md:px-8 lg:px-16 pt-8 pb-4">
          <Link
            href="/resources/article"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to articles</span>
          </Link>
        </SectionContainer>

        <SectionContainer className="px-4 md:px-8 lg:px-16 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-4 mb-12">
              <H1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                {author.name}
              </H1>
              {author.role && (
                <p className="text-base font-sans text-muted">{author.role}</p>
              )}
              {author.bio && (
                <p className="font-sans text-base leading-7 text-foreground">
                  {author.bio}
                </p>
              )}
            </div>

            <h2 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Articles by {author.name}
            </h2>

            {authorBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {authorBlogs.map((blog) => {
                  const full = (blogsData as Array<{
                    slug: string;
                    title: string;
                    description: string;
                    author: string;
                    date: string;
                    readTime: string;
                    category: string;
                  }>).find((b) => b.slug === blog.slug)!;
                  return (
                    <BlogCard
                      key={full.slug}
                      slug={full.slug}
                      title={full.title}
                      description={full.description}
                      author={full.author}
                      date={full.date}
                      readTime={full.readTime}
                      category={full.category}
                      image={`/blog-images/${full.slug}.png`}
                    />
                  );
                })}
              </div>
            ) : (
              <p className="font-sans text-muted">No articles yet.</p>
            )}
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
