import Link from "next/link";
import React from "react";

export default function F4() {
  return (
    <div>
      <h1>f4</h1>
      <Link className="text-blue-500" href="/f1/f3">
        f3
      </Link>
    </div>
  );
}
