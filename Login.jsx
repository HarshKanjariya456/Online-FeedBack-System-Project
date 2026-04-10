import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Login failed");
      }

      localStorage.setItem("token", json.token);
      localStorage.setItem("userRole", json.user.role);
      navigate("/form");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome Back</h1>
        <p>Login to submit or manage feedback.</p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form className="card" onSubmit={handleSubmit} style={{ margin: "20px auto", maxWidth: "400px" }}>
          <input name="email" type="email" placeholder="Email" onChange={handleChange} value={data.email} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} value={data.password} required />
          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}