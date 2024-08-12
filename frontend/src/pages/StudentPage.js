import axios from "axios";
import { useEffect, useState } from "react";

const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [updateStudent, setUpdateStudent] = useState({
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/students/showAll"
        );
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const createStudent = async () => {
    try {
      await axios.post("http://localhost:5000/api/students/create", newStudent);
      setNewStudent({ name: "", email: "", password: "" });
      // Refresh the list
      const response = await axios.get(
        "http://localhost:5000/api/students/showAll"
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  const updateStudentDetails = async () => {
    try {
      await axios.put(
        "http://localhost:5000/api/students/update",
        updateStudent
      );
      setUpdateStudent({ id: "", name: "", email: "" });
      // Refresh the list
      const response = await axios.get(
        "http://localhost:5000/api/students/showAll"
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/delete/${id}`);
      // Refresh the list
      const response = await axios.get(
        "http://localhost:5000/api/students/showAll"
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Add New Student</h2>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) =>
            setNewStudent({ ...newStudent, email: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={newStudent.password}
          onChange={(e) =>
            setNewStudent({ ...newStudent, password: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={createStudent}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Add Student
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Update Student</h2>
        <input
          type="text"
          placeholder="Student ID"
          value={updateStudent.id}
          onChange={(e) =>
            setUpdateStudent({ ...updateStudent, id: e.target.value })
          }
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Name"
          value={updateStudent.name}
          onChange={(e) =>
            setUpdateStudent({ ...updateStudent, name: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={updateStudent.email}
          onChange={(e) =>
            setUpdateStudent({ ...updateStudent, email: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={updateStudentDetails}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Update Student
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Student List</h2>
        <ul>
          {students.map((student) => (
            <li key={student._id} className="mb-2">
              {student.name} ({student.email})
              <button
                onClick={() => deleteStudent(student._id)}
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

export default StudentPage;
