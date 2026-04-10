import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user"
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Registration failed");
      }

      alert("Registration successful! Please login.");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Register</h1>
        <p>Create an account to submit feedback.</p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form className="card" onSubmit={handleSubmit} style={{ margin: "20px auto", maxWidth: "400px" }}>
          <input name="username" placeholder="Username" onChange={handleChange} value={data.username} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} value={data.email} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} value={data.password} required />
          <select name="role" onChange={handleChange} value={data.role}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
}
