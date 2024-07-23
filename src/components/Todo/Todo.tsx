import styles from "./Todo.module.css";
import { TodoProps } from "./interfaces.ts";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { useRef, useState } from "react";

export function Todo({ todo, onDelete, onModify }: TodoProps) {
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
    saveBtn,
    modifyInput,
  } = styles;
  const { name, timeStamp } = todo;
  const formattedDate = dayjs(timeStamp).format("DD/MM/YYYY");
  const formattedTime = dayjs(timeStamp).format("h:mm A");
  const [isChecked, setIsChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null!);

  function turnEditModeOn() {
    setEditMode(true);
  }

  function turnEditModeOff() {
    setEditMode(false);
  }

  function handleCheckBox() {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }

  function handleModify() {
    const newTodoName = inputRef.current.value;

    if (newTodoName.trim().length) {
      onModify(todo.id, inputRef.current.value);
    } else {
      setEditMode(false);
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
        {!editMode ? (
          <>
            <div className={classnames(todoName, isChecked ? completed : null)}>
              {name}
            </div>
            <div className={time}>
              {formattedTime}, {formattedDate}
            </div>
          </>
        ) : (
          <div>
            <input
              type="text"
              placeholder="modify your todo"
              ref={inputRef}
              className={modifyInput}
            />
            <button className={saveBtn} type="button" onClick={handleModify}>
              save
            </button>
          </div>
        )}
      </div>
      <button
        className={deleteBtn}
        type="button"
        onClick={() => onDelete(todo)}
      >
        <FontAwesomeIcon className={trash} icon={faTrash} />
      </button>

      {!editMode ? (
        <button className={modifyBox} type="button" onClick={turnEditModeOn}>
          <FontAwesomeIcon className={pen} icon={faPen} />
        </button>
      ) : (
        <button className={modifyBox} type="button" onClick={turnEditModeOff}>
          X
        </button>
      )}
    </div>
  );
}
