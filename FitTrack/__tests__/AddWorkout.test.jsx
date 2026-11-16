import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as workoutService from "../src/services/workoutService.js";
import AddWorkout from "../src/pages/AddWorkout.jsx";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

vi.mock("../src/contexts/AuthContext.jsx", () => ({
  useAuth: () => ({
    user: {
      id: "12345",
      name: "Test User",
      email: "test@test.com",
    },
    isAuthenticated: true,
  }),
}));

vi.mock("../src/services/workoutService.js", () => ({
  createWorkout: vi.fn(),
}));

describe("Add Workout Page", () => {
  test("renders add workout heading", () => {
    render(
      <BrowserRouter>
        <AddWorkout />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/add workout/i)
    ).toBeTruthy();
  });

  test("submits a workout", async () => {
    workoutService.createWorkout.mockResolvedValue({
      _id: "123",
      exerciseType: "Running",
      duration: 30,
      workoutDate: "2026-11-11",
    });

    render(
      <BrowserRouter>
        <AddWorkout />
      </BrowserRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText(/exercise type/i),
      {
        target: { value: "Running" },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/duration/i),
      {
        target: { value: "30" },
      }
    );

    fireEvent.change(
      document.querySelector('input[type="date"]'),
      {
        target: { value: "2026-11-11" },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /save workout/i,
      })
    );

    await waitFor(() => {
      expect(
        workoutService.createWorkout
      ).toHaveBeenCalled();
    });
  });
});