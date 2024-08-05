import axios from "axios";
import React, { useEffect, useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data);
    };
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Students</h1>
      <ul className="list-disc pl-8">
        {students.map((student, index) => (
          <li key={index} className="mb-2">
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
