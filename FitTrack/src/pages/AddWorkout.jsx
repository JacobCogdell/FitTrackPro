import { useState } from "react";
import { createWorkout } from "../services/workoutService";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function AddWorkout() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: user.id,
    exerciseType: "",
    duration: "",
    workoutDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createWorkout(formData);

      navigate("/workouts");

      setFormData({
        userId: user.id,
        exerciseType: "",
        duration: "",
        workoutDate: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>Add Workout</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="exerciseType"
          placeholder="Exercise Type"
          value={formData.exerciseType}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={formData.duration}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="workoutDate"
          value={formData.workoutDate}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Save Workout
        </button>
      </form>
    </main>
  );
}

export default AddWorkout;