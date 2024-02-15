import "./task-card.css";
import { completeTask } from "../../api-client";
import { useEffect, useState } from "react";

export default function TaskCard({ task, setComplete }) {
  function handleClick(event) {
    completeTask(task.id);
    const element = event.target;
    element.classList.addClass("task-completed");
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
