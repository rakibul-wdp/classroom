const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const classroomRoutes = require("./routes/classroomRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const loginRoutes = require("./shared/login");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser);

app.use("/login", loginRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/classroom", classroomRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
