require("dotenv").config();
const express = require("express");
const cors = require("cors");
const tutorialsRoutes = require("./Routes/tutorials");

const server = express();

const port = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());

server.use("/api/tutorials", tutorialsRoutes);

server.get("/", (req, res) => {
  res.json({ message: "Hello from the server." });
});

server.get("*", (req, res) => {
  res.status(404);
  res.json({ error: "This page doesn't exist." });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
