
// http://localhost:3000/api/users/4 => example-url
import { NextResponse } from "next/server";

export function GET(NextRequest, { params }) {
  const userId = params.id;
  return NextResponse.json({ userId: userId });
}
