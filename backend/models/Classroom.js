const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema({
  className: { type: String, required: true },
  days: { type: [String], required: true },
});

const Classroom = mongoose.model("Classroom", ClassroomSchema);
module.exports = Classroom;
