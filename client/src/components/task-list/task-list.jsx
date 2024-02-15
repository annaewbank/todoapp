/* eslint-disable react/prop-types */
import TaskCard from "../task-card/task-card";
import "./task-list.css";

export default function TaskList({ taskList }) {

  return (
    <>
      {taskList.map((task, index) => (
        <TaskCard task={task} key={index}/>
      ))}
    </>
  );
}
