const Task = require("../models/model");

async function getAllTasks(req, res) {
  try {
    const allTasks = await Task.findAll();
    // console.log(allTasks);
    res.status(200);
    res.send(allTasks);
    // res.status(200).json(await Task.findAll()); // 1 LINE SICK VERSION
  } catch (error) {
    res.status(500);
  }
}

async function addTask(req, res) {
  try {
    const newTask = await Task.create(await req.body);
    res.status(201);
    res.send(newTask);
  } catch (error) {
    console.log(error);
  }
}

async function toggleCompleted(req, res) {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    task.completed = !task.completed;
    task.save();
    res.status(201);
    res.send(task);
  } catch (error) {
    console.log(error);
  }
}

async function deleteTask(req, res) {
  try {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    task.destroy();
    res.status(200);
    res.send("Task deleted");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllTasks, addTask, toggleCompleted, deleteTask };
