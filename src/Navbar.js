import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ padding: "10px", background: theme === "light" ? "#eee" : "#444", color: theme === "light" ? "black" : "white" }}>
      <h3>Theme Switcher</h3>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
