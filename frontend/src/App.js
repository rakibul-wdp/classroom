import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Assign from "./pages/PrincipalPage";
import Classes from "./pages/Classes";
import CreateClass from "./pages/CreateClass";
import Login from "./pages/LoginPage";
import Students from "./pages/StudentPage";
import Teachers from "./pages/TeacherPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/create-class" element={<CreateClass />} />
        <Route path="/assign" element={<Assign />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </Router>
  );
}

export default App;
