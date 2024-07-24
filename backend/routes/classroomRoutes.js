const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");
const {
  createClassroom,
  assignTeacherToClassroom,
  assignStudentsToClassroom,
} = require("../controllers/classroomController");

const router = express.Router();

router.post("/create", protect, allowRoles("Principal"), createClassroom);
router.post(
  "/assign-teacher",
  protect,
  allowRoles("Principal"),
  assignTeacherToClassroom
);
router.post(
  "/assign-students",
  protect,
  allowRoles("Principal", "Teacher"),
  assignStudentsToClassroom
);

module.exports = router;
