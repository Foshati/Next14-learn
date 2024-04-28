const getUserS = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await data.json();
  return res;
};

export default async function UserTable() {
  const Users = await getUserS();
  console.log(getUserS);

  return (
    <div>
      {Users.map((User) => {
        return (
          <ul key={User.id}>
            <li>{User.name}</li>
          </ul>
        );
      })}
    </div>
  );
}
