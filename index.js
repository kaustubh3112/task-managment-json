const jsonServer = require("json-server");
const server = jsonServer.create();
const router1 = jsonServer.router("users.json");
const router2 = jsonServer.router("tasks.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);

// Directly use routers without extra path prefixes
server.use(router1);
server.use(router2);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
