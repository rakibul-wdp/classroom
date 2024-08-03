const express = require("express");
const {
  showAllTeachers,
  createATeacher,
  updateATeacher,
  deleteATeacher,
} = require("../controllers/teacherController");

const router = express.Router();

teacherRouter.get("/showAll", showAllTeachers);
teacherRouter.post("/create", createATeacher);
teacherRouter.post("/update", updateATeacher);
teacherRouter.post("/delete", deleteATeacher);

module.exports = router;
