import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${apiBaseUrl}/api/user/logout`,
        {},
        { withCredentials: true }
      );
      logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="navbar">
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to={"/"}>Home</Link>
        {!isAuthenticated && (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </>
        )}
        {isAuthenticated && <Link to={"/dashboard"}>Dashboard</Link>}
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
};
export default Navbar;
