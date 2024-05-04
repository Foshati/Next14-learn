"use client";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import sleep from "sleep-promise";

export default function book() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBookCsr = async () => {
      const data = await fetch("http://localhost:3001/posts");
      await sleep(2000);
      const res = await data.json();
      setBooks(res);
      setLoading(false);
    };
    getBookCsr();
  }, []);
  if (loading) {
    return <p>loading.. getBookCsr</p>;
  }

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
