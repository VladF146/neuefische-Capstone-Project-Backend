import dotenv from 'dotenv'

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./Router/users.js";
import tutorialsRouter from "./Router/tutorials.js";

const server = express();

dotenv.config()

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
