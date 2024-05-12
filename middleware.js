import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/about/:path*"],
};


//? The second method
// export function middleware(request) {
//   if (request.nextUrl.pathname.startWith == "about") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }
