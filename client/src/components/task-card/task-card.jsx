import "./task-card.css";

export default function TaskCard({task}) {
  return <p className="task-card">{task.title}</p>;
}
