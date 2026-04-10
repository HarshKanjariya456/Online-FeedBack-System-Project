import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h3>Feedback System</h3>

      <div>
        <Link to="/form">Form</Link>
        <Link to="/dashboard">Dashboard</Link>
        {token && (
          <button 
            onClick={handleLogout} 
            style={{ marginLeft: "15px", background: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}