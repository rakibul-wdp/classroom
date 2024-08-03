const express = require("express");
const Student = require("../models/Student.js");
const Teacher = require("../models/Teacher.js");

const router = express.Router();

const handleStudentLogin = async (res, name, email, password) => {
  try {
    const data = await Student.findOne({ name, email, password });

    if (data) {
      res
        .cookie("principal", false, {
          path: "/",
          httpOnly: false,
          domain: "http://localhost:3000",
          sameSite: "None",
          secure: true,
          maxAge: 24 * 60 * 60 * 1000,
        })
        .cookie("classroomName", data.classroomName, {
          path: "/",
          httpOnly: false,
          domain: "http://localhost:3000",
          sameSite: "None",
          secure: true,
        })
        .send({ classroomName: data.classroomName });
    } else {
      res.status(404).send({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

const handleTeacherLogin = async (res, name, email, password) => {
  try {
    const data = await Teacher.findOne({ name, email, password });

    if (data) {
      res
        .cookie("classroomAssigned", data.classroomAssigned, {
          path: "/",
          domain: "http://localhost:3000",
          httpOnly: false,
          sameSite: "None",
          secure: true,
        })
        .send({ classroomAssigned: data.classroomAssigned });
    } else {
      res.status(404).send({ message: "Teacher not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
};

const handlePrincipalLogin = (res) => {
  res
    .cookie("principal", true, {
      path: "/",
      httpOnly: false,
      sameSite: "None",
      domain: "http://localhost:3000",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    .send({ principal: true });
};

router.post("/", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (role === "student") {
      await handleStudentLogin(res, name, email, password);
    } else if (role === "teacher") {
      await handleTeacherLogin(res, name, email, password);
    } else if (email === "principal@classroom.com" && password === "Admin") {
      handlePrincipalLogin(res);
    } else {
      res.status(400).send({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
});

module.exports = router;
