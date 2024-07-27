import React from "react";
import ClassroomList from "../components/Classroom/ClassroomList";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <h1>Dashboard</h1>
        <ClassroomList />
      </main>
    </div>
  );
};

export default Dashboard;
