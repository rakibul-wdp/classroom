const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  classroomAssigned: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
