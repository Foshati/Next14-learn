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
            href="/dashboard" /* ?name=fa */
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
        <li>
          <Link
            href="/products"
            className={PathName == "/products" ? "text-red-500" : ""}
          >
            products
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className={PathName == "/users" ? "text-red-500" : ""}
          >
            users
          </Link>
        </li>
        <li>
          <Link
            href="/date"
            className={PathName == "/date" ? "text-red-500" : ""}
          >
            productsDate
          </Link>
        </li>
        <li>
          <Link
            href="/posts"
            className={PathName == "/posts" ? "text-red-500" : ""}
          >
            posts
          </Link>
        </li>

        <li>
          <Link
            href="/book"
            className={PathName == "/book" ? "text-red-500" : ""}
          >
            books-ssr
          </Link>
        </li>
        <li>
          <Link
            href="/book-csr"
            className={PathName == "/book-csr" ? "text-red-500" : ""}
          >
            books-csr
          </Link>
        </li>
      </ul>
      {/* <p>{PathName}</p> */}
    </div>
  );
};

export default Header;
