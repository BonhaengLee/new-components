import { useEffect, useState } from "react";
import axios from "axios";

export enum State {
  ACTIVE = 1,
  COMPLETED = 2,
  CANCELLED = 3,
}

export interface Todo {
  id: number;
  text: string;
  isActive: State;
}

const TodoApp = (): JSX.Element => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodo();
  }, []);
  // 체리픽 테스트용
  async function fetchTodo() {
    const { data }: { data: { todos: Todo[] } } = await axios.get(
      "http://127.0.0.1:3001/todo"
    );
    setTodos(data.todos);
  }

  const addTodo = (text: string) => {
    setTodos([...todos, { id: todos.length, text, isActive: State.ACTIVE }]);
  };

  const cancelTodoByIdx = (idx: number) => {
    setTodos(todos.filter((todo: Todo, todoIdx: number) => todoIdx !== idx));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onChangeHandler}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.keyCode === 13) {
            addTodo(text);
            setText("");
          }
        }}
        style={{ width: 300 }}
        placeholder="할 일을 입력하세요"
      />

      <div>
        {todos.map((todo: Todo, idx: number) => (
          <div key={idx}>
            <input
              data-test="todo-item"
              type="checkbox"
              onChange={() => cancelTodoByIdx(idx)}
            />
            <label>{todo.text}</label>

            <span data-test="todo-cancel" onClick={() => cancelTodoByIdx(idx)}>
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
