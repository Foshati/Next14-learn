// http://localhost:3000/api => example-url for route handler
// export function GET(request) {
//   return Response.json({ message: "hello fa" });
// }

import { NextResponse } from "next/server";

export function GET(NextRequest) {
  return NextResponse.json({ message: "hello fa" }, { status: 200 });
}






export async function POST(request) {
  // const body = await request.json();
  // console.log(body);
  // console.log(body.name);

  const body = await request.formData();
  console.log(body);

  return NextResponse.json({ message: "hello fa - method post" });
}
