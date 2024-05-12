// http://localhost:3000/api/about
import { NextResponse } from "next/server";

export function GET(NextRequest) {
  return NextResponse.json({ message: "hello about" }, { status: 200 });
}
