import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Dashboard from "./Dashboard.jsx";
import FormPage from "./FormPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}