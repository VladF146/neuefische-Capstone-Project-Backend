require("dotenv").config();
const express = require("express");

const server = express();

const port = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.json({ message: "Hello from the server." });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
