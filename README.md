**Problem Description: Temperature Converter (Celsius to Fahrenheit)
**
**Objective:
Create a React component that allows the user to input a temperature in Celsius and converts it to Fahrenheit. The component should dynamically update the Fahrenheit value as the user types.
**
Steps to Solve the Problem

**Component Setup:**

Create a functional component TemperatureConverter.

Use the useState hook to store the Celsius value.

**Input Field:**

Add an <input> element for the user to enter the Celsius temperature.

Bind the input value to the state (celsius).

Update the state whenever the user types using onChange.

**Conversion Logic:**

Create a function to convert Celsius to Fahrenheit:

Fahrenheit = (Celsius * 9/5) + 32


If the input is empty or invalid, display "-".

Display Result:

Show the converted Fahrenheit value dynamically below the input field.

Format the value to 2 decimal places for clarity.

Expected Behavior (Based on Test Cases)

**Heading is displayed:**

Test: renders Temperature Converter heading

Checks if the component displays the heading Temperature Converter.

**Input updates state:**

Test: input updates celsius value

Typing a value into the input updates the component state.

Correct conversion is displayed:

Test: displays correct Fahrenheit value

Example: Typing 25 Celsius should display 77.00 °F.

Empty input shows placeholder:

Test: displays '-' for empty input

If input is empty, Fahrenheit value shows "-".

**How to Implement**
Import useState from React.

Create a state variable for Celsius.

Bind the input to this state and update state on change.

Create a conversion function for Celsius → Fahrenheit.

Render the heading, input, and converted value dynamically.

Add proper formatting for numbers and handle empty input.

**output**
**before checking**

<img width="579" height="323" alt="image" src="https://github.com/user-attachments/assets/3aadca5e-5bbb-4ba3-a86e-574bc884f213" />

**Checking temperature**

<img width="688" height="425" alt="image" src="https://github.com/user-attachments/assets/63705cb9-62b7-4262-a56b-05c19783f38f" />
