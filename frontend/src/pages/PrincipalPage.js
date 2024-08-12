import axios from "axios";
import { useEffect, useState } from "react";

const PrincipalPage = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [newClassroom, setNewClassroom] = useState({ name: "", teacher: "" });
  const [updateClassroom, setUpdateClassroom] = useState({
    id: "",
    name: "",
    teacher: "",
  });
  const [classroomData, setClassroomData] = useState([]);
  const [assignedClassroom, setAssignedClassroom] = useState("");

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/classroom/existing"
        );
        setClassrooms(response.data);
      } catch (error) {
        console.error("Error fetching classrooms:", error);
      }
    };

    fetchClassrooms();
  }, []);

  const createClassroom = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/classroom/create",
        newClassroom
      );
      setNewClassroom({ name: "", teacher: "" });
      // Refresh the list
      const response = await axios.get(
        "http://localhost:5000/api/classroom/existing"
      );
      setClassrooms(response.data);
    } catch (error) {
      console.error("Error creating classroom:", error);
    }
  };

  const updateClassroomDetails = async () => {
    try {
      await axios.put(
        "http://localhost:5000/api/classroom/update/class",
        updateClassroom
      );
      setUpdateClassroom({ id: "", name: "", teacher: "" });
      // Refresh the list
      const response = await axios.get(
        "http://localhost:5000/api/classroom/existing"
      );
      setClassrooms(response.data);
    } catch (error) {
      console.error("Error updating classroom:", error);
    }
  };

  const assignClassroom = async () => {
    try {
      await axios.post("http://localhost:5000/api/classroom/assign", {
        classroomId: assignedClassroom,
      });
      // Refresh the list
      const response = await axios.get(
        "http://localhost:5000/api/classroom/existing"
      );
      setClassrooms(response.data);
    } catch (error) {
      console.error("Error assigning classroom:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Principal Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Add New Classroom</h2>
        <input
          type="text"
          placeholder="Classroom Name"
          value={newClassroom.name}
          onChange={(e) =>
            setNewClassroom({ ...newClassroom, name: e.target.value })
          }
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Teacher"
          value={newClassroom.teacher}
          onChange={(e) =>
            setNewClassroom({ ...newClassroom, teacher: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={createClassroom}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Add Classroom
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Update Classroom</h2>
        <input
          type="text"
          placeholder="Classroom ID"
          value={updateClassroom.id}
          onChange={(e) =>
            setUpdateClassroom({ ...updateClassroom, id: e.target.value })
          }
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Name"
          value={updateClassroom.name}
          onChange={(e) =>
            setUpdateClassroom({ ...updateClassroom, name: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Teacher"
          value={updateClassroom.teacher}
          onChange={(e) =>
            setUpdateClassroom({ ...updateClassroom, teacher: e.target.value })
          }
          className="ml-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={updateClassroomDetails}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Update Classroom
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Assign Classroom</h2>
        <input
          type="text"
          placeholder="Classroom ID"
          value={assignedClassroom}
          onChange={(e) => setAssignedClassroom(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={assignClassroom}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Assign
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Classroom List</h2>
        <ul>
          {classrooms.map((classroom) => (
            <li key={classroom._id} className="mb-2">
              {classroom.name} (Teacher: {classroom.teacher})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrincipalPage;
