const mongoose = require("mongoose");

const TimetableSchema = new mongoose.Schema({
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom" },
  subject: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  day: { type: String, required: true },
});

const Timetable = mongoose.model("Timetable", TimetableSchema);
module.exports = Timetable;
