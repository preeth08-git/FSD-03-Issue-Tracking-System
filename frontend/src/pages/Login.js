import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/login.css";

import { loginUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await loginUser(formData);

      alert(response.data.message);

      // Save token
      localStorage.setItem("token", response.data.token);

      // Save user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Redirect based on role
      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/employee");
      }

    } catch (error) {
        alert(error.response?.data?.message || "Something went wrong");
    }
  };


  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>

        <h1>Issue Tracker</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>

      </form>
    </div>
  );
}

export default Login;   