import styles from "./Todo.module.css";
import { TodoProps } from "./interfaces.ts";

export function Todo({ todo }: TodoProps) {
  const { container } = styles;

  return <div className={container}>{todo}</div>;
}
