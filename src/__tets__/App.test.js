import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders Theme Switcher heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/theme switcher/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders Light Mode initially", () => {
  render(<App />);
  const modeText = screen.getByText(/light mode active/i);
  expect(modeText).toBeInTheDocument();
});

test("switches to Dark Mode when button is clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /switch to dark mode/i });
  fireEvent.click(button);

  const darkModeText = screen.getByText(/dark mode active/i);
  expect(darkModeText).toBeInTheDocument();
});
