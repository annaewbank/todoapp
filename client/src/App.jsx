import "./App.css";
import AddTask from "./components/add-task/add-task";
import TaskCard from "./components/task-card/task-card";
import TaskList from "./components/task-list/task-list";

export default function App() {
  return (
    <>
      <AddTask />
      <TaskList />
      <TaskCard />
    </>
  );
}
