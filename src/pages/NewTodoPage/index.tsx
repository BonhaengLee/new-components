import { useState } from "react";
import { useMutation } from "react-query";

export default function newTodoPage() {
  const [todo, setTodo] = useState("");

  const mutation = useMutation(
    () =>
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          userId: 1,
          title: todo,
          completed: false,
        }),
      }).then((res) => res.json()),
    {
      onSuccess(data) {
        console.log("Successful", { data });
      },
      onError(error) {
        console.log("Failed", { error });
      },
      onSettled() {
        console.log("Mutation completed.");
      },
    }
  );

  async function addTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutateAsync();
  }

  return (
    <div className="App">
      <h1>useMutations() Hook</h1>
      <h2>Create, update or delete data</h2>
      <h3>Add a new todo</h3>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add todo</button>
      </form>
      {mutation.isLoading && <p>Making request...</p>}
      {mutation.isSuccess && <p>Todo added!</p>}
      {mutation.isError && <p>There was an error!</p>}
    </div>
  );
}
