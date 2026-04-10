import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeedbackForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to submit feedback.");
      navigate("/");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        alert(json.error || "Failed to submit feedback.");
        return;
      }

      alert("Feedback Submitted!");

      setData({
        name: "",
        email: "",
        rating: "",
        feedback: "",
      });
    } catch (err) {
      alert("Network error. Please try again.");
      console.error(err);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>

      <input name="name" placeholder="Enter Name" onChange={handleChange} value={data.name} required />

      <input name="email" type="email" placeholder="Enter Email" onChange={handleChange} value={data.email} required />

      <select name="rating" onChange={handleChange} value={data.rating} required>
        <option value="">Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <textarea name="feedback" placeholder="Enter Feedback" onChange={handleChange} value={data.feedback} required />

      <button type="submit">Submit</button>
    </form>
  );
}