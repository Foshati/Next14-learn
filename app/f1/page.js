import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1 className="text-2xl">F1 Page</h1>
      <div className="flex flex-col ">
        <Link className="text-blue-500" href="/f1/f2">
          F2 Page
        </Link>
        <Link className="text-blue-500" href="f1/f4">
          F4 Page
        </Link>
      </div>
    </>
  );
}
