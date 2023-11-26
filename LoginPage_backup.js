import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Login } from "../api/api";
import { useRoutes } from "react-router-dom";

const LoginPage = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Login({ uname, password });

      // If backend sends a success message upon successful authentication
      if (response.status === 200) {
        // Redirect to the welcome page or perform other actions
        // routes.push("/home");
        console.log("Authentication successful!");
      } else {
        // Handle authentication failure (show error message, etc.)
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8002/data", {
  //         withCredentials: true,
  //       });
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div>
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
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
