import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddWorkout from "../src/pages/AddWorkout.jsx";

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
});