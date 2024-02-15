import "./task-card.css";
import { completeTask } from "../../api-client";
import { useEffect, useState } from "react";

export default function TaskCard({ task, setComplete }) {
  function handleClick(event) {
    console.log(event.target);
    completeTask(task.id);
    const element = event.target;
    element.classList.add("task-completed");
    console.log(event.target);
    // setComplete((complete) => !complete);
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
