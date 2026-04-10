import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import FeedbackList from "./FeedbackList.jsx";
import FeedbackChart from "./FeedbackChart.jsx";
export default function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/feedback", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unauthorized: Admin access required.");
        }
        return res.json();
      })
      .then((data) => setFeedbacks(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Admin Dashboard</h2>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <>
            <FeedbackList feedbacks={feedbacks} />
            <FeedbackChart feedbacks={feedbacks} />
          </>
        )}
      </div>
    </>
  );
}