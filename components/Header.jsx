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
          <Link href="/" className={PathName == "/" ? "active" : ""}>
            home
          </Link>
        </li>
        <li>
          <Link href="/blog" className={PathName == "/blog" ? "active" : ""}>
            blog
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard"
            className={PathName == "/dashboard" ? "active" : ""}
          >
            dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className={PathName == "/dashboard/settings" ? "active" : ""}
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
