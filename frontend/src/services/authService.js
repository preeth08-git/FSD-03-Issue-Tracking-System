import axios from "axios";

const API = "https://fsd-03-issue-tracking-system.vercel.app/api/auth";

// REGISTER
export const registerUser = async (userData) => {
  return await axios.post(`${API}/register`, userData);
};

// LOGIN
export const loginUser = async (userData) => {
  return await axios.post(`${API}/login`, userData);
};