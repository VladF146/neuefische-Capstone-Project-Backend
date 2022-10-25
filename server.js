require("dotenv").config();
const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "Hello from the server." });
});

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
