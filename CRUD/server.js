const express = require("express");
const app = express();
const cors = require("cors");
const bp = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const { User } = require("./model");
const { Task } = require("./task");

const dbURI = process.env.DB_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log(process.env.PORT);
    console.log(`Database listening on ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log("error while connecting to db");
    console.log(err);
  });

const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

//routes
app.get("/", (req, res) => {
  res.send("hello malek from crud");
});

app.get("/api/task/:id", (req, res) => {
  const id = req.params.id;
  Task.find({ id: id })
    .then((tasks) => {
      console.log(tasks);
      res.json(tasks);
    })
    .catch((err) => res.json(err));
});

app.post("/api/task/:id", (req, res) => {
  const id = req.params.id;
  Task.create({
    id,
    task_name: req.body.name,
    time: req.body.time,
  })
    .then((response) => {
      res.send("Task added successfully to database");
      res.status(200);
    })
    .catch((err) => console.log(err));
});

app.delete("/api/task/:id", (req, res) => {
  const id = req.params.id;
  Task.findOneAndDelete({ _id: id })
    .then((resposne) => res.status(200).send("successfully deleted the task"))
    .catch((err) => {
      console.log(err);
      res.status(400).send(errr);
    });
});
