import { AddTodo } from "./components/AddTodo/AddTodo.tsx";
import "reset-css";
import styles from "./App.module.css";
import { Todo } from "./components/Todo/Todo.tsx";
import { useState } from "react";
import { ITodo } from "./components/Todo/interfaces.ts";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const { container, title, todosWrapper, EmptyTodo } = styles;

  const onAddTodo = (newTodoName: string) => {
    if (newTodoName.trim().length) {
      const newTodo: ITodo = {
        name: newTodoName,
        timeStamp: new Date().toString(),
        id: uuidv4(),
      };

      setTodoList((existingTodoList: ITodo[]) => {
        return [...existingTodoList, newTodo];
      });
    }
  };

  function handleDelete(todoDelete: ITodo) {
    setTodoList((existingTodoList: ITodo[]) => {
      return existingTodoList.filter((i) => i.id !== todoDelete.id);
    });
  }

  function handleModify(id: string, modifiedName: string) {
    function modifyTodoList(existingTodoList: ITodo[]) {
      return existingTodoList.map((i) => {
        if (i.id === id) {
          return {
            name: modifiedName,
            timeStamp: new Date().toString(),
            id: uuidv4(),
          };
        } else {
          return i;
        }
      });
    }

    setTodoList(modifyTodoList);
  }

  return (
    <>
      <div className={container}>
        <p className={title}>TODO LIST</p>
        <AddTodo onAddTodo={onAddTodo} />
        <div className={todosWrapper}>
          {todoList.length ? (
            todoList.map((i) => (
              <Todo
                todo={i}
                key={i.timeStamp}
                onDelete={handleDelete}
                onModify={handleModify}
              />
            ))
          ) : (
            <p className={EmptyTodo}>
              Empty todo list, please add some tasks...
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
