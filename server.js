require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./Router/users");
const tutorialsRouter = require("./Router/tutorials");

const server = express();

const port = process.env.PORT || 5000;
const mongodb_uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://VladF146:jU7%259CEZ%24iFn3YSs9e2z@courseapp.9lwqmqm.mongodb.net/?retryWrites=true&w=majority";

server.use(express.json());
server.use(cors());

server.use("/api/users", userRouter);
server.use("/api/tutorials", tutorialsRouter);

server.get("/", (req, res) => {
  res.json({ message: "Hello from the server." });
});

server.get("*", (req, res) => {
  res.status(404);
  res.json({ error: "This page doesn't exist." });
});

mongoose
  .connect(mongodb_uri)
  .then(() => {
    server.listen(port, () => {
      console.log(`Server listening on port ${port}.`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
