const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./api/auth/auth.routes");
const usersRoutes = require("./api/users/users.routes");
const todoRoutes = require("../src/api/todos/todo.routes");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/todo", todoRoutes);

app.listen(process.env.PORT || 8000, () => {
  console.log("Listening on port 8000");
});
