const Student = require("../models/Student.js");

const showAllStudent = async (req, res) => {
  const data = await Student.find({});

  res.json(data);
};

const createAStudent = async (req, res) => {
  const { name, password, email } = req.body;

  await Student.create({ name, password, email });
};

const updateStudent = async (req, res) => {
  const { name, className, email, password } = req.body;

  let data = await Student.findOneAndUpdate(
    { name },
    { $set: { name, classroomName: className, email, password } }
  );
};

const deleteStudent = async (req, res) => {
  try {
    const { name } = req.body;

    const data = await Student.findOneAndDelete({ name });

    res.json({ success: true });
  } catch (err) {
    console.log("Student not found");
  }
};

module.export = {
  showAllStudent,
  deleteStudent,
  updateStudent,
  createAStudent,
};
