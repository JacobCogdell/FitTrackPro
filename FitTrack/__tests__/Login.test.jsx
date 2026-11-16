import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../src/pages/login.jsx";
import { fireEvent } from "@testing-library/react";
import * as authService from "../src/services/authService.js";

vi.mock("../src/contexts/AuthContext.jsx", () => ({
  useAuth: () => ({
    login: vi.fn(),
    isAuthenticated: false,
    user: null,
  }),
}));

describe("Login Page", () => {
  test("renders login heading", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /login/i,
      })
    ).toBeTruthy();
  });
});