import axios from "axios";

const API_URL = "http://localhost:5000/api";

const getToken = () => localStorage.getItem("token");

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = (credentials) => api.post("/auth/login", credentials);

export const createClassroom = (classroom) =>
  api.post("/classrooms/create", classroom);

export const getClassrooms = () => api.get("/classrooms");

export const createUser = (user) => api.post("/users/create", user);

export const getUsers = () => api.get("/users");
