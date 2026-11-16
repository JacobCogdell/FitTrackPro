import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      const userData = await loginUser(formData);

      login(userData);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="main-content">
      <h1>Login</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;