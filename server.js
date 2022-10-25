require("dotenv").config();
const express = require("express");

const server = express();

server.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

server.get("/", (req, res) => {
  res.json({ message: "Hello from the server." });
});

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
