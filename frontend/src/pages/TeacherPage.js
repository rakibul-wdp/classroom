import axios from "axios";
import { useEffect, useState } from "react";

const TeacherPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [updateTeacher, setUpdateTeacher] = useState({
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/teachers/showAll"
        );
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  const createTeacher = async () => {
    try {
      await axios.post("http://localhost:5000/api/teachers/create", newTeacher);
      setNewTeacher({ name: "", email: "", password: "" });
      // Refresh the list
      const response = await axios.get(
        "http://localhost:5000/api/teachers/showAll"
      );
      setTeachers(response.data);
    } catch (error) {
      console.error("Error creating teacher:", error);
    }
  };

  const updateTeacherDetails = async () => {
    try {
      await axios.put(
        "http://localhost:5000/api/teachers/update",
        updateTeacher
      );
      setUpdateTeacher({ id: "", name: "", email: "" });
      // Refresh the list
      const response = await axios.get(
        "http://localhost:5000/api/teachers/showAll"
      );
      setTeachers(response.data);
    } catch (error) {
      console.error("Error updating teacher:", error);
    }
  };

  const deleteTeacher = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/teachers/delete/${id}`);
      // Refresh the list
      const response = await axios.get(
        "http://localhost:5000/api/teachers/showAll"
      );
      setTeachers(response.data);
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Add New Teacher</h2>
        <input
          type="text"
          placeholder="Name"
          value={newTeacher.name}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, name: e.target.value })
          }
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newTeacher.email}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, email: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={newTeacher.password}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, password: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={createTeacher}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Add Teacher
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Update Teacher</h2>
        <input
          type="text"
          placeholder="Teacher ID"
          value={updateTeacher.id}
          onChange={(e) =>
            setUpdateTeacher({ ...updateTeacher, id: e.target.value })
          }
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Name"
          value={updateTeacher.name}
          onChange={(e) =>
            setUpdateTeacher({ ...updateTeacher, name: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={updateTeacher.email}
          onChange={(e) =>
            setUpdateTeacher({ ...updateTeacher, email: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={updateTeacherDetails}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Update Teacher
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Teacher List</h2>
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher._id} className="mb-2">
              {teacher.name} ({teacher.email})
              <button
                onClick={() => deleteTeacher(teacher._id)}
                className="ml-2 p-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherPage;
