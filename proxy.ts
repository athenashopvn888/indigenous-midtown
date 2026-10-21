import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isHiddenCigarettePath, VAPE_PAGE } from "./app/lib/cigaretteRedirects";

export function proxy(request: NextRequest) {
  if (!isHiddenCigarettePath(request.nextUrl.pathname)) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = VAPE_PAGE;
  return NextResponse.redirect(url, 302);
}

export const config = {
  matcher: [
    "/cigarettes",
    "/items/cigarettes",
    "/native-cigarettes-yonge-eglinton",
    "/info/native-cigarettes-toronto",
    "/info/native-cigarettes-york",
    "/resources/native-smokes",
    "/resources/native-smokes/:path*",
    "/guides/:slug",
    "/item/:slug",
  ],
};
