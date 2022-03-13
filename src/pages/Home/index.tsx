import { useQuery } from "react-query";
import "../../styles/Home.module.scss";

interface IUser {
  id: number;
  name: string;
}
type IUsers = IUser[];

export default function App() {
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
  };

  const { data, isLoading, isError, error } = useQuery<IUsers, Error>(
    "users",
    fetchUsers
  );

  return (
    <div className="App">
      <h1>Data Fetching</h1>
      <h2>With React Query's useQuery Hook</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>{error?.message}</p>
      ) : (
        data?.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
}
