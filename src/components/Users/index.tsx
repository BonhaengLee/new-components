import { useQuery } from "react-query";

interface IUser {
  id: number;
  name: string;
}
type IUsers = IUser[];

export default function Users() {
  const { data, isLoading, isError, error } = useQuery<IUsers, Error>(
    "users",
    () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      )
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <div>
      {data?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
