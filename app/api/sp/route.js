// http://localhost:3000/api/sp?color=red&size=xl =>example searchParams url

import { NextResponse } from "next/server";

export function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const color = searchParams.get("color");
  const size = searchParams.get("size");

  return NextResponse.json({ message: `color: ${color} - size:${size}` });
}
