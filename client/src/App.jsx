import "./App.css";
import AddTask from "./components/add-task/add-task";
import TaskList from "./components/task-list/task-list";
import { useEffect, useState } from "react";
import { getAllTasks, addTask } from "./api-client";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [todaysTasks, setTodaysTasks] = useState([]);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    getAllTasks().then((res) => {
      setTodaysTasks(res.filter(task => task.deadline === today && !task.completed))
      setTaskList(res.filter(task => !task.completed && task.deadline !== today))
      setCompletedTasks(res.filter(task => task.completed));
    });
  });


  function updateTaskList(task) {
    addTask(task).then((res) => setTaskList([...taskList, res]));
  }


  return (
    <div className="wrapper">

      <div className="add-task">
        <AddTask addTask={updateTaskList} />
      </div>

      <div className="task-list">

        {todaysTasks.length > 0 &&
        <div className="todays-tasks task-container">
          <h2>Today's tasks:</h2>
          <TaskList taskList={todaysTasks} />
        </div>}

        {taskList.length > 0 &&
        <div className="future-tasks task-container">
          <h2>Future tasks:</h2>
          <TaskList taskList={taskList} />
        </div>}

        {completedTasks.length > 0 &&
        <div className="completed-tasks task-container">
          <h2>Completed tasks:</h2>
          <TaskList taskList={completedTasks} />
        </div>}

      </div>

    </div>
  );
}
