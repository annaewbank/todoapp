import "./App.css";
import AddTask from "./components/add-task/add-task";
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

  function updateTaskList(task) {
    addTask(task).then((res) => setTaskList([...taskList, res]))
  }

  return (
    <div className="wrapper">
      <div className="add-task">
        <AddTask addTask={updateTaskList} />
      </div>
      <div className="task-list">
        <TaskList taskList={taskList}/>
      </div>
    </div>
  );
}
