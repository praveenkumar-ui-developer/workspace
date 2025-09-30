import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      height: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white"
    }}>
      <h2>{theme === "light" ? "Light Mode" : "Dark Mode"} Active</h2>
    </div>
  );
};

export default Content;
