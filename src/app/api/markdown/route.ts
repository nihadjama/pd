import { NextRequest, NextResponse } from "next/server";
import { getMarkdownForPath } from "@/utils/markdownContent";

/**
 * Serves markdown for the requested path when Accept: text/markdown.
 * Called via middleware rewrite so agents/LLMs get efficient, semantic content.
 */
export function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") ?? "/";
  const markdown = getMarkdownForPath(path);

  if (markdown === null) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
