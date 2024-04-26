"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <button
        className="float-right px-4 py-2 m-4 rounded bg-amber-300 "
        type="button"
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </button>
    </main>
  );
}
