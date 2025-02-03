const jsonServer = require("json-server");
const server = jsonServer.create();
const usersRouter = jsonServer.router("users.json");
const tasksRouter = jsonServer.router("tasks.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);

// Correctly mount users.json at /users
server.use("/users", usersRouter);

// Correctly mount tasks.json at /tasks
server.use("/tasks", tasksRouter);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
