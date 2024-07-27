import React, { useEffect, useState } from "react";
import { getClassrooms } from "../../services/api";

const ClassroomList = () => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const fetchClassrooms = async () => {
      const { data } = await getClassrooms();
      setClassrooms(data);
    };
    fetchClassrooms();
  }, []);

  return (
    <div>
      <h2>Classrooms</h2>
      <ul>
        {classrooms.map((classroom) => (
          <li key={classroom._id}>
            {classroom.name} ({classroom.startTime} - {classroom.endTime})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassroomList;
