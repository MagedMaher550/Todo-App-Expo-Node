const express = require("express");
const bodyParser = require("body-parser");
const {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    clearTodos,
} = require("./todo.services");

const todoRouter = express.Router();
todoRouter.use(bodyParser.json());

// Create a Todo
todoRouter.post("/", async (req, res) => {
    console.log("")
    const { name, isChecked, userId } = req.body;
    const todo = await createTodo(name, isChecked, userId);
    res.json(todo);
});

// Get all Todos
todoRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const todo = await getAllTodos(parseInt(id));
    console.log(todo);
    res.json(todo);
});

// Update a Todos
todoRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, isChecked } = req.body;
    const todo = await updateTodo(id, name, isChecked);
    res.json(todo);
});

// Clear Todo
todoRouter.delete("/clear", async (req, res) => {
    const { userId } = req.body;
    const todo = await clearTodos(userId);
    res.json(todo);
});

// Delete a Todos
todoRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const todo = await deleteTodo(id);
    res.json(todo);
});

module.exports = todoRouter;