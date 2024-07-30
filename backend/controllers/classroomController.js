const Classroom = require("../models/Classroom");
const User = require("../models/User");

const createClassroom = async (req, res) => {
  const { name, startTime, endTime, days } = req.body;
  const classroom = await Classroom.create({
    name,
    startTime,
    endTime,
    days,
  });
  res.status(201).json(classroom);
};

const getClassrooms = async (req, res) => {
  const allClassroom = await Classroom.find();

  res.status(201).json(allClassroom);
};

const assignTeacherToClassroom = async (req, res) => {
  const { classroomId, teacherId } = req.body;
  const classroom = await Classroom.findById(classroomId);
  const teacher = await User.findById(teacherId);

  if (!classroom || !teacher || teacher.role !== "Teacher") {
    return res.status(404).json({ message: "Classroom or Teacher not found" });
  }

  classroom.teacher = teacher._id;
  teacher.classroom = classroom._id;
  await classroom.save();
  await teacher.save();

  res.json({ message: "Teacher assigned to classroom" });
};

const assignStudentsToClassroom = async (req, res) => {
  const { classroomId, studentIds } = req.body;
  const classroom = await Classroom.findById(classroomId);
  const students = await User.find({
    _id: { $in: studentIds },
    role: "Student",
  });

  if (!classroom || students.length === 0) {
    return res.status(404).json({ message: "Classroom or Students not found" });
  }

  students.forEach(async (student) => {
    student.classroom = classroom._id;
    await student.save();
  });

  classroom.students.push(...students.map((student) => student._id));
  await classroom.save();

  res.json({ message: "Students assigned to classroom" });
};

module.exports = {
  createClassroom,
  getClassrooms,
  assignTeacherToClassroom,
  assignStudentsToClassroom,
};
