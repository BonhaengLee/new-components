import { useState } from "react";
import { useQuery } from "react-query";

interface IUser {
  id: number;
  name: string;
}
type IUsers = IUser[];

export default function Users() {
  const [id, setId] = useState<number | null>(null);

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
      {data?.map(({ id, name }) => (
        <p key={id} onClick={() => setId(id)}>
          {name}
        </p>
      ))}
      <br />
      {id && <UserInfo id={id} />}
    </div>
  );
}

interface IUserInfo {
  name: string;
  email: string;
  phone: string;
  website: string;
}

function UserInfo({ id }: { id: number }) {
  const { data, isLoading, isError, error } = useQuery<IUserInfo, Error>(
    `user-${id}`,
    () =>
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
        res.json()
      )
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
      <p>{data?.phone}</p>
      <p>{data?.website}</p>
    </div>
  );
}
