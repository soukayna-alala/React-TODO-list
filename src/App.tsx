import "./App.css";
import { AddTodo } from "./components/AddTodo/AddTodo.tsx";

/**
 * Instructions
 * ------------
 *
 * 1. When page loads for the first time show heading, input on the left and blue add task button on the right side. And a message "Empty todo list, please add some tasks.." beneath (as its an empty list)
 * 2. Once the user enters a todo in the input field then clicking on the `Add task` button should save the todo in the todo list.
 * 3. Clicking the delete icon on a todo should remove that todo from the list.
 * 4. Use a standard html checkbox, and when its ticked add a strikethrough to the todo using css class. Clicking it again should do the opposite and remove the strikethrough.
 */

function App() {
  return (
    <>
      <div>
        <AddTodo />
      </div>
    </>
  );
}

export default App;
