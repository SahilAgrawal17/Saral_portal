// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens and redirect to login
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  return (
    <div className="container">
      <h1>Welcome to the Dashboard!</h1>
      <p>This is your secured area after login.</p>
      <button onClick={handleLogout} style={{ marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
}

export default Home;
