import React from "react";
import { useState } from "react";
import { Login } from "../api/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Login({ uname, password });
      if (response.status === 200) {
        console.log("Authentication successful!");
        // Redirect to the home page upon successful login
        navigate(`/home?uname=${uname}`);
      } else {
        console.error("Authentication failed");
        // Display an error message for invalid credentials
        alert("Invalid credentials. Register first...");
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);
      alert("An error occurred during authentication. Please Register First.");
      navigate(`/register`);
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
        <h2>Login</h2>
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
