const jsonServer = require("json-server");
const server = jsonServer.create();
const router1 = jsonServer.router("users.json");
const router2 = jsonServer.router("tasks.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);

// Route users.json under "/users"
server.use("/users", (req, res, next) => {
  req.url = req.url.replace(/^\/?/, "/users");
  router1(req, res, next);
});

// Route tasks.json under "/tasks"
server.use("/tasks", (req, res, next) => {
  req.url = req.url.replace(/^\/?/, "/tasks");
  router2(req, res, next);
});

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
