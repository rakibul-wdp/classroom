const Classroom = require("../models/Classroom");
const Student = require("../models/Student.js");
const Teacher = require("../models/Teacher.js");

const showExistingClasses = async (req, res) => {
  const data = await Student.find({});
  const obj = {};

  data.forEach((ele) => {
    if (obj[ele.classroomName]) {
      obj[ele.classroomName] = [...obj[ele.classroomName], ele];
    } else obj[ele.classroomName] = [ele];
  });

  res.json(obj);
};

const createAClass = async (req, res) => {
  const { className, days } = req.body;

  await Classroom.create({ className, days });

  res.cookie("className", className, { path: "/" }).json({ success: true });
};

const assigningTeachersAndStudents = async (req, res) => {
  const { teachers, students } = req.body;

  let { className } = req.cookies;

  await Classroom.findOneAndUpdate(
    { className },
    { $set: { teachers, students } }
  );

  res.json({ success: true });
};

const gettingAClass = async (req, res) => {
  let { className } = req.body;

  let data = await Classroom.findOne({ className });

  res.json(data);
};

const creatingAnAccount = async (req, res) => {
  const { name, email, password, type } = req.body;

  type.toLowerCase();

  if (type == "student") await Student.create(name, email, password);
  else await Teacher.create(name, email, password);
};

const updateAClass = async (req, res) => {
  let { className, days } = req.body;

  let data = await Classroom.findOneAndUpdate(
    { className },
    { $push: { days: days } }
  );

  if (!data) await Classroom.create({ className, days });
};

export {
  assigningTeachersAndStudents,
  createAClass,
  creatingAnAccount,
  gettingAClass,
  showExistingClasses,
  updateAClass,
};
