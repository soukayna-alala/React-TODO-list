import styles from "./Todo.module.css";
import { TodoProps } from "./interfaces.ts";

export function Todo({ todo, onDelete }: TodoProps) {
  const { container } = styles;

  return (
    <div className={container}>
      <div>{todo}</div>
      <button type="button" onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
}
