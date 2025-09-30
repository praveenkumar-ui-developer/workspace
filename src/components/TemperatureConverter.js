import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");

  const handleChange = (e) => {
    setCelsius(e.target.value);
  };

  const toFahrenheit = (c) => {
    if (c === "" || isNaN(c)) return "";
    return ((Number(c) * 9) / 5 + 32).toFixed(2);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Temperature Converter</h2>
      <div>
        <label>
          Enter Celsius:{" "}
          <input
            type="number"
            value={celsius}
            onChange={handleChange}
            placeholder="Celsius"
          />
        </label>
      </div>
      <p>
        Temperature in Fahrenheit:{" "}
        {toFahrenheit(celsius) !== "" ? `${toFahrenheit(celsius)} °F` : "-"}
      </p>
    </div>
  );
};

export default TemperatureConverter;
