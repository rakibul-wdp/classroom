import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        name,
        email,
        password,
        role,
      });
      const { data } = response;
      if (data.principal) {
        navigate("/principal");
      } else if (data.classroomAssigned) {
        navigate("/teacher");
      } else if (data.classroomName) {
        navigate("/student");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
