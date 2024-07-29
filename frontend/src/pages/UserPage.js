import React from "react";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import UserForm from "../components/User/UserForm";
import UserList from "../components/User/UserList";

const UserPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <h1>Manage Users</h1>
        <UserForm />
        <UserList />
      </main>
    </div>
  );
};

export default UserPage;
