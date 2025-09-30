import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App"; // correct path


test("renders To-Do List heading", () => {
  render(<App />);
  expect(screen.getByText(/To-Do List/i)).toBeInTheDocument();
});

test("adds a new task", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter a task/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
});

test("marks a task as completed", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter a task/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Finish Assignment" } });
  fireEvent.click(button);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  expect(checkbox.checked).toBe(true);
});

test("updates pending task counter", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter a task/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Task 1" } });
  fireEvent.click(button);

  expect(screen.getByText(/Pending Tasks: 1/i)).toBeInTheDocument();
});
