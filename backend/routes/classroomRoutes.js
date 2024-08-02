const express = require("express");
const {
  showExistingClasses,
  createAClass,
  gettingAClass,
  updateAClass,
  creatingAnAccount,
  assigningTeachersAndStudents,
} = require("../controllers/classroomController");

const router = express.Router();

router.get("/existing", showExistingClasses);
router.post("/create", createAClass);
router.post("/get/class", gettingAClass);
router.post("/update/class", updateAClass);
router.post("/create/account", creatingAnAccount);
router.post("/assign", assigningTeachersAndStudents);

module.exports = router;
