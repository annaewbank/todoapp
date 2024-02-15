/* eslint-disable react/prop-types */
import { useState } from "react";
import "./add-task.css";

export default function AddTask({addTask}) {
  const [formValues, setFormValues] = useState({
    title: "",
    deadline: new Date().toISOString().split('T')[0],
    completed: false
  })

  function handleAdd(event){
    event.preventDefault();
    addTask(formValues)
    setFormValues({
      title: "",
      deadline: new Date().toISOString().split('T')[0],
      completed: false
    })
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value})
  }

  return (
    <div className="add-task">
      <form onSubmit={handleAdd}>
        <input name="title" placeholder="Add Task" type="text" value={formValues.title} onChange={handleChange} required/>
        <div className="date-and-add">
          <input name="deadline" type="date" value={formValues.deadline} onChange={handleChange}/>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
