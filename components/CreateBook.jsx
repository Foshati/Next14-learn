import { addBook } from "@/actions/post";
import Button from "./Button";

export default function CreateBook() {
  return (
    <div className="mx-auto mt-14 card bg-base-200 w-80">
      <form action={addBook} className="card-body">
        <input
          placeholder="name book"
          className="input input-bordered"
          name="title"
        />

        <textarea
          placeholder="Description of the book"
          name="body"
          className="input input-bordered"
        />
        <Button />
      </form>
    </div>
  );
}
