import { render, screen, fireEvent } from "@testing-library/react";
import TemperatureConverter from "../components/TemperatureConverter";

test("renders Temperature Converter heading", () => {
  render(<TemperatureConverter />);
  expect(screen.getByText(/temperature converter/i)).toBeInTheDocument();
});

test("input updates celsius value", () => {
  render(<TemperatureConverter />);
  const input = screen.getByPlaceholderText("Celsius");
  fireEvent.change(input, { target: { value: "25" } });
  expect(input.value).toBe("25");
});

test("displays correct Fahrenheit value", () => {
  render(<TemperatureConverter />);
  const input = screen.getByPlaceholderText("Celsius");
  fireEvent.change(input, { target: { value: "25" } });
  expect(screen.getByText(/77\.00 °F/i)).toBeInTheDocument();
});

test("displays '-' for empty input", () => {
  render(<TemperatureConverter />);
  expect(screen.getByText(/temperature in fahrenheit: -/i)).toBeInTheDocument();
});
