/* eslint-disable react/prop-types */
import TaskCard from "../task-card/task-card";
import "./task-list.css";

export default function TaskList({taskList}) {
  return(
    <>
    {taskList.map(task => <TaskCard task={task} key={task.id}/>)}
    </>
  );
}
