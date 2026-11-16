import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header>
      <h1>FitTrack Pro</h1>

      <nav className="app-nav">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Dashboard</Link>{" | "}
            <Link to="/workouts">Workouts</Link>{" | "}
            <Link to="/workouts/new">Add Workout</Link>{" | "}
            <Link to="/profile">Profile</Link>{" | "}
            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>{" | "}
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;