import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const LoginButton = () => {
  const { login } = useContext(AuthContext);

  return <button onClick={login}>Login</button>;
};

export default LoginButton;
