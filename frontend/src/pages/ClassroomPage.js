import React from "react";
import ClassroomForm from "../components/Classroom/ClassroomForm";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";

const ClassroomPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <h1>Create Classroom</h1>
        <ClassroomForm />
      </main>
    </div>
  );
};

export default ClassroomPage;
