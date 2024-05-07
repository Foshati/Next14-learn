// server action function
const addBook = async () => {
  "use server";
  console.log("test");
};

export default function CreateBook() {
  return (
    <div className="mx-auto mt-14 card bg-base-200 w-80">
      <form action={addBook} className="card-body">
        <input placeholder="name book" className="input input-bordered" />
        <input
          placeholder="Description of the book"
          className="input input-bordered"
        />
        <button type="submit" className="btn btn-neutral">
          create Book
        </button>
      </form>
    </div>
  );
}
