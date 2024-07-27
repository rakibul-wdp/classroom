import React, { useState } from "react";
import { createClassroom } from "../../services/api";

const ClassroomForm = () => {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [days, setDays] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createClassroom({ name, startTime, endTime, days });
      alert("Classroom created successfully");
    } catch (err) {
      console.error("Failed to create classroom", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Start Time:</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>End Time:</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Days:</label>
        <select
          multiple
          value={days}
          onChange={(e) =>
            setDays([...e.target.selectedOptions].map((option) => option.value))
          }
          required
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
      </div>
      <button type="submit">Create Classroom</button>
    </form>
  );
};

export default ClassroomForm;
