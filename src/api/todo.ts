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

export async function getTodo() {
  const { data }: { data: { todos: Todo[] } } = await axios.get("/todos");
  return data.todos;
}
