import { useEffect, useState } from "react";
import { getTodo, Todo, State } from "../../api/todo";

const useTodo = ({ getTodos = getTodo }: { getTodos?: any } = {}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  async function fetchTodo() {
    console.log(getTodos);
    const todos = await getTodos();
    setTodos(todos);
  }

  const addTodo = (text: string) => {
    setTodos([...todos, { id: todos.length, text, isActive: State.ACTIVE }]);
  };

  const cancelTodoByIdx = (idx: number) => {
    // 1 : use a filter to find the todo
    // setTodos(todos.filter((todo: Todo, todoIdx: number) => todoIdx !== idx));
    // 2 : slice the array
    let newTodos = Array<Todo>();
    newTodos = newTodos.concat(
      todos.slice(0, idx),
      todos.slice(idx + 1, todos.length)
    );
    setTodos(newTodos);
  };

  return { todos, addTodo, cancelTodoByIdx };
};

export default useTodo;
