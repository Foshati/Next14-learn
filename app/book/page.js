import Link from "next/link";

const getBook = async () => {
  const data = await fetch("http://localhost:3001/posts", {
    // cache: "force-cache",
    // cache: "no-store",
    // cache: "revalidate:5",
  });
  const res = await data.json();
  return res;
};

export default async function book() {
  const books = await getBook();
  return (
    <div>
      {books.map((book) => {
        return (
          <ul className="p-4 m-4 " key={book.id}>
            <li className="text-slate-400">
              <Link href={`/book/${book.id}`}>{book.title}</Link>
              {book.title}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
