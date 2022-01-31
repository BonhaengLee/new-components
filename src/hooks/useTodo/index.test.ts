import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import useTodo from ".";

import { Todo, State } from "../../api/todo";

const TEMP_TODOS: Todo[] = [
  {
    id: 0,
    text: "todo1",
    isActive: State.ACTIVE,
  },
  {
    id: 1,
    text: "todo2",
    isActive: State.ACTIVE,
  },
  {
    id: 2,
    text: "todo3",
    isActive: State.ACTIVE,
  },
];

const mock = new MockAdapter(axios);

describe("Todo App", () => {
  test("can add item", async () => {
    mock.onGet("/todos").reply(200, { todos: TEMP_TODOS });

    const { result, rerender, waitForNextUpdate } = renderHook(() => useTodo());
    await waitForNextUpdate();

    act(() => result.current.addTodo(TEMP_TODOS[0].text));
    expect(result.current.todos.length).toBe(4);

    act(() => result.current.addTodo(TEMP_TODOS[1].text));
    expect(result.current.todos.length).toBe(5);
  });
});

describe("can remove todo item", () => {
  let hooks: {
    current: {
      todos: Todo[];
      addTodo: (arg0: string) => Promise<void | undefined>;
      cancelTodoByIdx: (arg0: number) => Promise<void | undefined>;
    };
  };

  beforeEach(async () => {
    mock.onGet("/todos").reply(200, { todos: TEMP_TODOS });

    const { result, rerender, waitForNextUpdate }: any = renderHook(() =>
      useTodo()
    );
    hooks = result;

    await waitForNextUpdate();

    act(() => result.current.addTodo(TEMP_TODOS[0].text));
    act(() => result.current.addTodo(TEMP_TODOS[1].text));
    act(() => result.current.addTodo(TEMP_TODOS[2].text));
  });

  test("first item cancel", () => {
    expect(hooks.current.todos.length).toBe(6);

    act(() => hooks.current.cancelTodoByIdx(0));

    expect(hooks.current.todos.length).toBe(5);
  });

  test("last item cancel", () => {
    expect(hooks.current.todos.length).toBe(6);

    act(() => hooks.current.cancelTodoByIdx(5));

    expect(hooks.current.todos.length).toBe(5);
  });

  test("first item middle", () => {
    expect(hooks.current.todos.length).toBe(6);

    act(() => hooks.current.cancelTodoByIdx(3));

    expect(hooks.current.todos.length).toBe(5);
  });
});
