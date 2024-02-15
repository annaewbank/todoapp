/* eslint-disable react/prop-types */
import "./task-card.css";
import { completeTask } from "../../api-client";

export default function TaskCard({ task }) {
  
  function handleClick() {
    completeTask(task.id);
  }

  return (
    <p
      className={task.completed ? "task-card task-completed" : "task-card"}
      onClick={handleClick}
    >
      {task.title}
    </p>
  );
}
