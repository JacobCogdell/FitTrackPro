const API_URL =
  "https://fittrackpro-49w5.onrender.com/api/workouts";

export const getWorkouts = async (userId) => {
  const response = await fetch(
    `${API_URL}/${userId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
};

export const createWorkout = async (workoutData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workoutData),
  });

  if (!response.ok) {
    throw new Error("Failed to create workout");
  }

  return response.json();
};