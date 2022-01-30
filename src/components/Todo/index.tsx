import { useState } from "react";
import useTodo from "../../hooks/useTodo";

const Todo = (): JSX.Element => {
  const [text, setText] = useState("");
  const { todos, addTodo, cancelTodoByIdx } = useTodo();

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
          if (e.key === "Enter") {
            addTodo(text);
            setText("");
          }
        }}
        style={{ width: 300 }}
        placeholder="할 일을 입력하세요"
      />

      <div>
        {todos.map((todo, idx) => (
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

export default Todo;
