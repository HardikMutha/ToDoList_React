import { useState } from "react";
import ListPart from "./Listpart.jsx";
import "./StyleList.css";
import TodoForm from "./TodoForm.jsx";

export default function TodoList() {
  const [tasks, updateTasks] = useState([
    { id: 1, text: "Buy Vegetables", completed: false },
    { id: 2, text: "walk the dog", completed: true },
    { id: 3, text: "Clean The Room", completed: false },
  ]);
  function removeTodo(id) {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    updateTasks([...updatedTasks]);
  }
  function updateTask(taskname) {
    const newtask = { id: 10, text: taskname, completed: false };
    const updatedTasks = [...tasks, newtask];
    updateTasks(updatedTasks);
  }

  return (
    <div>
      <ListPart
        listitems={tasks}
        removeElement={removeTodo}
        updateTask={updateTask}
      />
    </div>
  );
}
