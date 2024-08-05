import axios from "axios";
import React, { useEffect, useState } from "react";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const res = await axios.get("http://localhost:5000/api/teachers");
      setTeachers(res.data);
    };
    fetchTeachers();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Teachers</h1>
      <ul className="list-disc pl-8">
        {teachers.map((teacher, index) => (
          <li key={index} className="mb-2">
            {teacher.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teachers;
