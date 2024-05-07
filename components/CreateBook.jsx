import { revalidatePath } from "next/cache";

// server action function
const addBook = async (formData) => {
  "use server";
  //   console.log(formData.get("title"));
  const title = formData.get("title");
  const body = formData.get("body");
  const res = await fetch("http://localhost:3001/posts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
    }),
  });
  const data = await res.json();
  revalidatePath("/posts");
  return data;
};

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
          id=""
          className="input input-bordered"
        />
        <button type="submit" className="btn btn-neutral">
          create Book
        </button>
      </form>
    </div>
  );
}
