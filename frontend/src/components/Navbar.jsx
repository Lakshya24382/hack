import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: 15 }}>Dashboard</Link>
      <Link to="/requests" style={{ marginRight: 15 }}>Requests</Link>
      <Link to="/swaps" style={{ marginRight: 15 }}>Swaps</Link>
      <Link to="/profile" style={{ marginRight: 15 }}>Profile</Link>
      <Link to="/login" style={{ marginRight: 15 }}>Login</Link>
    </nav>
  );
}