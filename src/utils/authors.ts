import authorsData from "@/data/authors.json";

export interface Author {
  slug: string;
  name: string;
  role?: string;
  bio?: string;
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return (authorsData as Author[]).find((a) => a.slug === slug);
}

export function getAuthorSlugByName(name: string): string | undefined {
  const author = (authorsData as Author[]).find(
    (a) => a.name.toLowerCase() === name.toLowerCase()
  );
  return author?.slug;
}

export function getAllAuthors(): Author[] {
  return authorsData as Author[];
}
