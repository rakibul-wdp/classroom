const express = require("express");
const {
  showAllStudent,
  createAStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/showAll", showAllStudent);
router.post("/create", createAStudent);
router.post("/update", updateStudent);
router.post("/delete", deleteStudent);

module.exports = router;
