const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");
const { createUser, getUsers } = require("../controllers/userController");

const router = express.Router();

router.post("/create", protect, allowRoles("Principal"), createUser);
router.get("/", protect, getUsers);

module.exports = router;
