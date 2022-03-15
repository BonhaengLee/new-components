import { useQuery } from "react-query";

interface IPost {
  id: number;
  title: string;
}
type IPosts = IPost[];

export default function Posts() {
  const { data, isLoading, isError, error } = useQuery<IPosts, Error>(
    "posts",
    () =>
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then((res) =>
        res.json()
      )
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error?.message}</p>;

  return (
    <div>
      {data?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
