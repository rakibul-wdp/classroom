import axios from "axios";
import React, { useState } from "react";

const CreateClass = () => {
  const [formData, setFormData] = useState({ className: "", days: [] });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/classrooms/create", formData);
      alert("Class created successfully!");
    } catch (error) {
      console.error("Error creating class", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4">Create Class</h2>
        <input
          type="text"
          name="className"
          placeholder="Class Name"
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="text"
          name="days"
          placeholder="Days (comma-separated)"
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateClass;
