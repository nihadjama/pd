import Link from "next/link";
import SectionContainer from "@/common/SectionContainer";
import { H1 } from "@/common/headings";
import { ArrowLeft, User } from "lucide-react";
import type { Metadata } from "next";
import { getAllAuthors } from "@/utils/authors";

export const metadata: Metadata = {
  title: "Authors | PracticeDilly Blog",
  description: "Meet the authors behind the PracticeDilly blog. Expert insights on dental practice management and patient engagement.",
};

export default function AuthorsIndexPage() {
  const authors = getAllAuthors();

  return (
    <div className="relative min-h-screen bg-background">
      <SectionContainer className="px-4 md:px-8 lg:px-16 pt-8 pb-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to blog</span>
        </Link>
      </SectionContainer>

      <SectionContainer className="px-4 md:px-8 lg:px-16 py-12">
        <div className="max-w-3xl mx-auto">
          <H1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Authors
          </H1>
          <p className="font-sans text-muted mb-12">
            Expert insights on dental practice management and patient engagement.
          </p>

          <ul className="space-y-6 list-none p-0 m-0">
            {authors.map((author) => (
              <li key={author.slug}>
                <Link
                  href={`/author/${author.slug}`}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary transition-colors"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(94,72,240,0.1)] text-primary">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {author.name}
                    </span>
                    {author.role && (
                      <p className="text-sm text-muted mt-0.5">{author.role}</p>
                    )}
                    {author.bio && (
                      <p className="font-sans text-sm text-foreground mt-2 line-clamp-2">
                        {author.bio}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>
    </div>
  );
}
