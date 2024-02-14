const Task = require('../models/model');

function getAllTasks(req, res) {
  try {
  } catch (error) {}
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
