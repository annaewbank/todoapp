import "./App.css";
import AddTask from "./components/add-task/add-task";
import TaskCard from "./components/task-card/task-card";
import TaskList from "./components/task-list/task-list";
import { useEffect, useState } from "react";
import { getAllTasks, addTask } from "./api-client";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(()=>{
    getAllTasks().then(res => {
      setTaskList(res);
    })
  }, [])

  return (
    <div className="wrapper">
      <div className="add-task">
        <AddTask />
      </div>
      <div className="task-list">
        <TaskList taskList={taskList} />
      </div>
    </div>
  );
}
