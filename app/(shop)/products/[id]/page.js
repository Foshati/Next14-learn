import { notFound } from "next/navigation";

export default function productId({ params }) {
  //   console.log(params.id);

  if (parseInt(params.id) == 2) {
    notFound();
  }

  return (
    <div>
      <p>{params.id}</p>
    </div>
  );
}
