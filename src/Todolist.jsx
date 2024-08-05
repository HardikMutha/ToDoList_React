import { useEffect, useState } from "react";
import ListPart from "./Listpart.jsx";
import "./StyleList.css";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    const getInitialdata = ()=>{
        const data = JSON.parse(localStorage.getItem("tasks"));
        if(!data)
            return [];
        return data;
    }

  const [tasks, updateTasks] = useState(getInitialdata);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  function removeTodo(id) {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    updateTasks([...updatedTasks]);
  }
  function updateTask(taskname) {
    const newtask = { id: uuidv4(), text: taskname, completed: false };
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
