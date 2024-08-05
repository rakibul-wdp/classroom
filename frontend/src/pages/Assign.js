import axios from "axios";
import React, { useState } from "react";

const Assign = () => {
  const [formData, setFormData] = useState({ teachers: "", students: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/classrooms/assign", formData);
      alert("Teachers and Students assigned successfully!");
    } catch (error) {
      console.error("Error assigning teachers and students", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4">Assign Teachers and Students</h2>
        <input
          type="text"
          name="teachers"
          placeholder="Teachers (comma-separated)"
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="text"
          name="students"
          placeholder="Students (comma-separated)"
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Assign
        </button>
      </form>
    </div>
  );
};

export default Assign;
