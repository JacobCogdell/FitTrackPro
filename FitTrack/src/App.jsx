import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import AddWorkout from "./pages/AddWorkout";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/workouts"
          element={
            <ProtectedRoute>
              <Workouts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/workouts/new"
          element={
            <ProtectedRoute>
              <AddWorkout />
            </ProtectedRoute>
          }
        />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;