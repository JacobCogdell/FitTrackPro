import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getWorkouts } from "../services/workoutService";

function Dashboard() {
  const { user } = useAuth();

  const [workoutCount, setWorkoutCount] = useState(0);

  useEffect(() => {
    const loadWorkoutCount = async () => {
      try {
        const workouts = await getWorkouts(user.id);
        setWorkoutCount(workouts.length);
      } catch (error) {
        console.error(error);
      }
    };

    loadWorkoutCount();
  }, [user.id]);

  return (
    <main>
      <h1>Dashboard</h1>

      <h2>Welcome, {user.name}!</h2>

      <p>
        You have logged <strong>{workoutCount}</strong>{" "}
        workout{workoutCount !== 1 ? "s" : ""}.
      </p>
    </main>
  );
}

export default Dashboard;