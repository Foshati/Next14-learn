"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const PathName = usePathname();

  return (
    <div className="m-4">
      <ul className="flex gap-8 text-lg">
        <li>
          {/* <a href="/">home</a> */}
          <Link href="/" className={PathName == "/" ? "text-red-500" : ""}>
            home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={PathName == "/blog" ? "text-red-500" : ""}
          >
            blog
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className={PathName == "/dashboard" ? "text-red-500" : ""}
          >
            dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className={PathName == "/dashboard/settings" ? "text-red-500" : ""}
          >
            settings
          </Link>
        </li>
      </ul>
      {/* <p>{PathName}</p> */}
    </div>
  );
};

export default Header;
