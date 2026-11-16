import { useEffect, useState } from "react";
import { getWorkouts } from "../services/workoutService";
import { useAuth } from "../contexts/AuthContext";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const data = await getWorkouts(user.id);
        setWorkouts(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadWorkouts();
  }, []);

  return (
    <main>
      <h1>Workout History</h1>

      {workouts.map((workout) => (
        <div key={workout._id}>
          <h3>{workout.exerciseType}</h3>
          <p>Duration: {workout.duration} minutes</p>
          <p>
            Date:
            {" "}
            {new Date(workout.workoutDate).toLocaleDateString()}
          </p>
        </div>
      ))}
    </main>
  );
}

export default Workouts;