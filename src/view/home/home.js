import React from "react";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const uname = params.get("uname");

  return (
    <div>
      <h1>Welcome, {uname}!</h1>
    </div>
  );
};
