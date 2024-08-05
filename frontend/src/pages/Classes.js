import axios from "axios";
import React, { useEffect, useState } from "react";

const Classes = () => {
  const [classes, setClasses] = useState({});

  useEffect(() => {
    const fetchClasses = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/classrooms/existing"
      );
      setClasses(res.data);
    };
    fetchClasses();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(classes).map((className) => (
          <div key={className} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">{className}</h2>
            <ul>
              {classes[className].map((student, index) => (
                <li key={index} className="mb-2">
                  {student.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
