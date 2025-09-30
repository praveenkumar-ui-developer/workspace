import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders Theme Switcher heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/theme switcher/i); // matches <h3>Theme Switcher</h3>
  expect(headingElement).toBeInTheDocument();
});

test("renders current mode text", () => {
  render(<App />);
  const modeElement = screen.getByText(/light mode active/i); // matches <h2>Light Mode Active</h2>
  expect(modeElement).toBeInTheDocument();
});

test("switches theme on button click", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /switch to dark/i });
  fireEvent.click(button);
  const darkModeElement = screen.getByText(/dark mode active/i); // update based on your app logic
  expect(darkModeElement).toBeInTheDocument();
});
