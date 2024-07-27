import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const role = localStorage.getItem("role");

  return (
    <aside>
      <ul>
        <li>
          <Link to="/classrooms">Classrooms</Link>
        </li>
        {role === "Principal" && (
          <li>
            <Link to="/users">Users</Link>
          </li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
