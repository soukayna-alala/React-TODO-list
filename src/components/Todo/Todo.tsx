import styles from "./Todo.module.css";
import { TodoProps } from "./interfaces.ts";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { useState } from "react";

export function Todo({ todo, onDelete }: TodoProps) {
  const {
    time,
    container,
    deleteBtn,
    trash,
    checkBox,
    modifyBox,
    pen,
    todoName,
    nameAndContainer,
    completed,
  } = styles;
  const { name, timeStamp } = todo;
  const formattedDate = dayjs(timeStamp).format("DD/MM/YYYY");
  const formattedTime = dayjs(timeStamp).format("h:mm A");
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckBox() {
    console.log("foo");
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }

  return (
    <div className={container}>
      <input
        className={classnames(checkBox)}
        type="checkbox"
        onClick={handleCheckBox}
      />
      <div className={classnames(nameAndContainer)}>
        <div className={classnames(todoName, isChecked ? completed : null)}>
          {name}
        </div>
        <div className={time}>
          {formattedTime}, {formattedDate}
        </div>
      </div>
      <button
        className={deleteBtn}
        type="button"
        onClick={() => onDelete(todo)}
      >
        <FontAwesomeIcon className={trash} icon={faTrash} />
      </button>

      <button className={modifyBox} type="button">
        <FontAwesomeIcon className={pen} icon={faPen} />
      </button>
    </div>
  );
}
