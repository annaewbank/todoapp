const router = require("express").Router();
const controller = require("./controllers/controller")

// GET
router.get("/tasks", controller.getAllTasks);

// POST
router.post("/tasks", controller.addTask);

// PUT
router.put("/tasks/:id", controller.completeTask);

// DELETE
router.delete("/tasks", controller.deleteTask);

module.exports = router;