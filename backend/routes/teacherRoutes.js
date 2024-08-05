const express = require("express");
const {
  showAllTeachers,
  createATeacher,
  updateATeacher,
  deleteATeacher,
} = require("../controllers/teacherController");

const router = express.Router();

router.get("/showAll", showAllTeachers);
router.post("/create", createATeacher);
router.post("/update", updateATeacher);
router.post("/delete", deleteATeacher);

module.exports = router;
