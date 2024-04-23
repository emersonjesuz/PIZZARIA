import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/loja", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/loja"],
};