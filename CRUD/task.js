const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  task_name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    unique: true,
  },
});

module.exports.Task = mongoose.model("Task", taskSchema);
