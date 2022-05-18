import React from "react";
import { useQuery } from "react-query";

const fetchTodos = async () => {
  // Fetch todos from the API
};

export default function Todos() {
  const { data, isError, isLoading } = useQuery("todos", fetchTodos);

  if (isError) {
    return <p>Failed to load todos.</p>;
  }

  if (isLoading) {
    return <p>Loading todos...</p>;
  }

  return (
    <>
      {/* <InsertTodo /> */}
      {data}
      <ul>
        {/* {data.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))} */}
      </ul>
    </>
  );
}
