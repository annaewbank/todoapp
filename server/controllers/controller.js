const Task = require("../models/model");

async function getAllTasks(req, res) {
  try {
    const allTasks = await Task.findAll();
    console.log(allTasks);
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

function completeTask() {}

function deleteTask() {}

module.exports = { getAllTasks, addTask, completeTask, deleteTask };
