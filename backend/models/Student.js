const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  classroomName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
