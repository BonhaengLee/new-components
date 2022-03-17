import React from "react";
import { useMutation, useQueryClient } from "react-query";

const insertTodo = async (todoId) => {
  // Send a request to API
};

function InsertTodo() {
  const [text, setText] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation(insertTodo, {
    onMutate: async (newTodo) => {
      // Stop the queries that may affect this operation
      await queryClient.cancelQueries("todos");

      // Get a snapshot of current data
      const snapshotOfPreviousTodos = queryClient.getQueryData("todos");

      // Modify cache to reflect this optimistic update
      queryClient.setQueryData("todos", (oldTodos) => [newTodo, ...oldTodos]);

      // Return a snapshot so we can rollback in case of failure
      return {
        snapshotOfPreviousTodos,
      };
    },

    onError: (error, newTodo, { snapshotOfPreviousTodos }) => {
      // Rollback the changes using the snapshot
      queryClient.setQueryData("todos", snapshotOfPreviousTodos);
    },

    onSuccess() {
      // Refetch or invalidate related queries
      queryClient.invalidateQueries("todos");
    },

    onSettled: () => {
      // This will run in the end, no matter of failure or success
      setText(""); // Clear textarea
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    mutation.mutate({
      id: "__RANDOM_TEMP_ID__",
      text,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a new todo..."
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button type="submit">Save</button>
    </form>
  );
}
