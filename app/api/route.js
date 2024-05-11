// export function GET(request) {
//   return Response.json({ message: "hello fa" });
// }

import { NextResponse } from "next/server";

export function GET(NextRequest) {
  return NextResponse.json({ message: "hello fa" });
}
