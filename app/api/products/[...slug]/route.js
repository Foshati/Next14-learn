// http://localhost:3000/api/products/f1/43/43s => example-url
import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const productsSlug = params.slug;
  return NextResponse.json({ productsSlug: productsSlug });
}
