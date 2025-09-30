import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("initially shows Login button", () => {
  render(<App />);
  const loginButton = screen.getByText(/Login/i);
  expect(loginButton).toBeInTheDocument();
});

test("shows welcome message and Logout button after login", () => {
  render(<App />);
  const loginButton = screen.getByText(/Login/i);
  fireEvent.click(loginButton);
  expect(screen.getByText(/Welcome, User!/i)).toBeInTheDocument();
  expect(screen.getByText(/Logout/i)).toBeInTheDocument();
});

test("returns to Login button after logout", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Login/i));
  fireEvent.click(screen.getByText(/Logout/i));
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});
