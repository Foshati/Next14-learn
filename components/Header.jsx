import Link from "next/link";

const Header = () => {
  return (
    <div className="m-4">
      <ul className="flex gap-8 text-lg">
        <li>
          {/* <a href="/">home</a> */}
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/dashboard">dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
