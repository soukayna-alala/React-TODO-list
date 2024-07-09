import { AddTodo } from "./components/AddTodo/AddTodo.tsx";
import "reset-css";
import styles from "./App.module.css";
import { Todo } from "./components/Todo/Todo.tsx";
import { useState } from "react";

/**
 * Instructions
 * ------------
 *
 * 1. When page loads for the first time show heading, input on the left and blue add task button on the right side.
 *    And a message "Empty todo list, please add some tasks.." beneath (as its an empty list)
 * 2. Once the user enters a todo in the input field then clicking on the `Add task` button should save the todo in the todo list.
 * 3. Clicking the delete icon on a todo should remove that todo from the list.
 * 4. Use a standard html checkbox, and when its ticked add a strikethrough to the todo using css class. Clicking it again should do the opposite and remove the strikethrough.
 */

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const { container } = styles;

  /**
   * Function that will fire when a user enters a new todo
   * and submits the form by pressing the add task button
   * @param newTodo string
   */
  const onAddTodo = (newTodo: string) => {
    setTodoList((existingTodoList: string[]) => {
      return [...existingTodoList, newTodo];
    });
  };

  function handleDelete(todoDelete: string) {
    setTodoList((existingTodoList: string[]) => {
      return existingTodoList.filter((i) => i !== todoDelete);
    });
  }

  return (
    <>
      <div className={container}>
        <h1>TODO LIST</h1>
        <AddTodo onAddTodo={onAddTodo} />
        {todoList.length
          ? todoList.map((i) => (
              <Todo todo={i} key={i} onDelete={handleDelete} />
            ))
          : "Empty todo list, please add some tasks..."}
      </div>
    </>
  );
}

export default App;
