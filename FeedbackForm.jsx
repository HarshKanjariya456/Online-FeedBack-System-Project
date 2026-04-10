import { useState } from "react";

export default function FeedbackForm({ feedbacks, setFeedbacks }) {
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

    const res = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert("Failed to submit feedback. Check your login status.");
      return;
    }

    alert("Feedback Submitted!");

    setData({
      name: "",
      email: "",
      rating: "",
      feedback: "",
    });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>

      <input name="name" placeholder="Enter Name" onChange={handleChange} value={data.name} required />

      <input name="email" placeholder="Enter Email" onChange={handleChange} value={data.email} required />

      <select name="rating" onChange={handleChange} value={data.rating} required>
        <option value="">Select Rating</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <textarea name="feedback" placeholder="Enter Feedback" onChange={handleChange} value={data.feedback} required />

      <button type="submit">Submit</button>
    </form>
  );
}