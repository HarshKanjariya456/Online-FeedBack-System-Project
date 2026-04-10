import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Dashboard from "./Dashboard.jsx";
import FormPage from "./FormPage.jsx";

export default function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/form"
          element={
            <FormPage
              feedbacks={feedbacks}
              setFeedbacks={setFeedbacks}
            />
          }
        />

        <Route
          path="/dashboard"
          element={<Dashboard feedbacks={feedbacks} />}
        />
      </Routes>
    </BrowserRouter>
  );
}