import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "../src/pages/Register.jsx";

describe("Register Page", () => {
  test("renders register heading", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("heading", { name: /register/i })
    ).toBeTruthy();
  });
});