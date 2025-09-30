import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "./AuthContext";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function AppContent() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {isLoggedIn ? (
        <>
          <h2>Welcome, User!</h2>
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
