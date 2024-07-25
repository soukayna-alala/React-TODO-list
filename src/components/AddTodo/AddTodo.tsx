import { FormEvent, useRef } from "react";
import styles from "./AddTodo.module.css";
import { AddTodoProps } from "./interfaces.ts";

export function AddTodo({ onAddTodo }: AddTodoProps) {
  const { input, addBtn } = styles;
  const inputField = useRef<HTMLInputElement>(null!);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const todo = inputField.current.value.trim();

    onAddTodo(todo);
    inputField.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={input}
        type="text"
        ref={inputField}
        placeholder="type your todo"
        id={"add-todo"}
      />
      <button className={addBtn} type="submit">
        add task
      </button>
    </form>
  );
}
