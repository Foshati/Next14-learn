// http://localhost:3000/api => example-url for route handler
// export function GET(request) {
//   return Response.json({ message: "hello fa" });
// }

import { NextResponse } from "next/server";

export function GET(NextRequest) {
  return NextResponse.json({ message: "hello fa" }, { status: 200 });
}
