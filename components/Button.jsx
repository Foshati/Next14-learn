"use client";

import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();

  return (
    <div>
      <button type="submit" disabled={pending} className="btn btn-neutral">
        create Book
      </button>
    </div>
  );
}
