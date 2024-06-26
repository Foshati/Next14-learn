import styles from "./posts.module.css";

const getPost = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await data.json();
  //   throw new Error("error page")     //side effect
  return res;
};

export default async function Posts() {
  // // notFound()
  // if (parseInt(params.id) == 2) {
  //   notFound();
  // }
  const Posts = await getPost();
  //   console.log(Posts);

  return (
    <div>
      {Posts.map((post) => (
        <ul key={post.id} className="m-4">
          <li className={styles.bgColor}>{post.title}</li>
        </ul>
      ))}

      
    </div>
  );
}
