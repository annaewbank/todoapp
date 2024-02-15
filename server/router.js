const router = require("express").Router();
const controller = require("./controllers/controller");

// GET
router.get("/tasks", controller.getAllTasks);

// POST
router.post("/tasks", controller.addTask);

// PUT
router.put("/tasks/:id/completed", controller.toggleCompleted);

// DELETE
router.delete("/tasks/:id/delete", controller.deleteTask);

module.exports = router;
