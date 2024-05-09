"use client";
import { addBook } from "@/actions/post";
import Button from "./Button";
import { useFormState } from "react-dom";

export default function CreateBook() {
  const [state, formAction] = useFormState(addBook, {});
  return (
    <div className="mx-auto mt-14 card bg-base-200 w-80">
      <form action={formAction} className="card-body">
        <input
          placeholder="name book"
          className="input input-bordered"
          name="title"
        />
        <p>{state?.errTitle}</p>

        <textarea
          placeholder="Description of the book"
          name="body"
          className="input input-bordered"
        />
        <p>{state?.errBody}</p>

        <Button />
      </form>
    </div>
  );
}
