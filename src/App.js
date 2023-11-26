import { Navigate, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./App.css";
import LoginPage from "./components/LoginPage";
import { Home } from "./view/home/home";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
