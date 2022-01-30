import { useEffect, useState } from "react";
import { getTodo, Todo, State } from "../../api/todo";

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  async function fetchTodo() {
    const todos = await getTodo();
    setTodos(todos);
  }

  const addTodo = (text: string) => {
    setTodos([...todos, { id: todos.length, text, isActive: State.ACTIVE }]);
  };

  const cancelTodoByIdx = (idx: number) => {
    setTodos(todos.filter((todo: Todo, todoIdx: number) => todoIdx !== idx));
  };

  return { todos, addTodo, cancelTodoByIdx };
};

export default useTodo;
