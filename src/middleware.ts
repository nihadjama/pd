import { NextRequest, NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://practicedilly.com";

/**
 * When agents/LLMs request with Accept: text/markdown, serve markdown instead of HTML.
 * Similar to Vercel's changelog/docs and parallel.ai - efficient for AI consumers.
 */
export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  if (!accept.toLowerCase().includes("text/markdown")) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname || "/";
  const url = new URL("/api/markdown", request.url);
  url.searchParams.set("path", pathname);

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except:
     * - api (markdown handler and other API routes)
     * - _next/static, _next/image
     * - favicon, sitemap, robots, static assets
     */
    "/((?!api|_next/static|_next/image|favicon|sitemap|robots|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?|css|js)$).*)",
  ],
};
