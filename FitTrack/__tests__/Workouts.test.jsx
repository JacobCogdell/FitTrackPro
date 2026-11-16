import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext.jsx";
import Workouts from "../src/pages/Workouts.jsx";

describe("Workouts Page", () => {
  test("renders workout history heading", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Workouts />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(
      screen.getByText(/workout history/i)
    ).toBeTruthy();
  });
});