import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    if (request.nextUrl.pathname === "/q") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/q", request.url));
  }
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/lojaq", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/q", "/lojaq"],
};
