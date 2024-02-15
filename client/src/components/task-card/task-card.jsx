/* eslint-disable react/prop-types */
import "./task-card.css";
import { deleteTask, toggleTaskCompleted } from "../../api-client";
import { TiDelete } from "react-icons/ti";

export default function TaskCard({ task }) {

  function handleComplete() {
    toggleTaskCompleted(task.id);
  }

  function handleDelete() {
    deleteTask(task.id);
  }

  function prettifyDate(date) {
    date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <>
    <div
      className={task.completed ? "task-card task-completed" : "task-card"}
      onClick={handleComplete}
    >
    <p><span>{task.title}</span><br /><span className="date">{prettifyDate(task.deadline)}</span></p>
    <TiDelete className="delete" onClick={handleDelete} size={"1.5rem"}/>
    </div>
    </>
  );
}
