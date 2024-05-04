const getBookId = async (id) => {
  const data = await fetch(`http://localhost:3001/posts/${id}`);
  const res = await data.json();
  return res;
};

export default async function bookId({ params }) {
  const bookId = await getBookId(params.id);
  return (
    <div className="p-4 m-4">
      <p className="text-lg text-slate-400">{bookId.title}</p>
      <p>{bookId.body}</p>
    </div>
  );
}
