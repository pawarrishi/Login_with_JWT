import React, { useState } from "react";
import { Register } from "../api/api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Register({ uname, password });
      if (response.status === 201) {
        console.log("Registration successful!");
        alert("Registration successful!");
        // Redirect to the home page upon successful login
        navigate(`/login`);
      } else {
        console.error("Registration failed");
        // Display an error message for invalid credentials
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      alert("An error occurred during registration. Please try again later.");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <h2>Register</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Username:
            <input
              type="text"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password :
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
