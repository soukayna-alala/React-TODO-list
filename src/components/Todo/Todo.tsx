import styles from "./Todo.module.css";
import { TodoProps } from "./interfaces.ts";
import dayjs from "dayjs";

export function Todo({ todo, onDelete }: TodoProps) {
  const { container, deleteBtn } = styles;
  const { name, timeStamp } = todo;
  const formattedDate = dayjs(timeStamp).format("dddd, MMMM D, YYYY h:mm A");

  return (
    <div className={container}>
      <div>{name}</div>
      <div>{formattedDate}</div>
      <button
        className={deleteBtn}
        type="button"
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
    </div>
  );
}
