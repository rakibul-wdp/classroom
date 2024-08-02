const Teacher = require("../models/Teacher.js");

const showAllTeachers = async (req, res) => {
  const data = await Teacher.find({});

  res.json(data);
};

const createATeacher = async (req, res) => {
  const { name, email, password } = req.body;

  await Teacher.create({ name, email, password });
};

const updateATeacher = async (req, res) => {
  const { name, email, password, className } = req.body;

  await Teacher.findOneAndUpdate(
    { name },
    { $set: { name, classroomAssigned: className, email, password } }
  );
};

const deleteATeacher = async (req, res) => {
  const { name } = req.body;

  await Teacher.findOneAndDelete({ name });
};

module.exports = {
  showAllTeachers,
  createATeacher,
  deleteATeacher,
  updateATeacher,
};
