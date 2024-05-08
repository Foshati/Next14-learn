"use server";
import { revalidatePath } from "next/cache";

// server action function
const addBook = async (formData) => {
  "use server";

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

export { addBook };
