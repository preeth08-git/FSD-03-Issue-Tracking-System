import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/login.css";

import { registerUser } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      const response = await registerUser(formData);

      alert(response.data.message);

      navigate("/");

    } catch (error) {
        alert(error.response?.data?.message || "Something went wrong");
    }
  };


  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>

        <h1>Create Account</h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

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

        <button type="submit">Register</button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>

      </form>
    </div>
  );
}

export default Register;