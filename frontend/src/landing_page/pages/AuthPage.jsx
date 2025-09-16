import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

// Basic styles for the container
const authPageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "50px 20px",
  minHeight: "80vh",
};

const formContainerStyle = {
  width: "100%",
  maxWidth: "400px",
  padding: "30px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  backgroundColor: "#fff",
};

const toggleStyle = {
  marginTop: "20px",
  textAlign: "center",
  fontSize: "0.9em",
};

const toggleLinkStyle = {
  color: "#007bff",
  cursor: "pointer",
  textDecoration: "underline",
  background: "none",
  border: "none",
  padding: "0",
};

const AuthPage = () => {
  // State to toggle between Login and Signup view. false = Signup, true = Login.
  const [isLoginView, setIsLoginView] = useState(false);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="container">
      <div style={authPageStyle} className="p-5 mt-5">
        <div style={formContainerStyle}>
          {isLoginView ? (
            <>
              <Login />
              <div style={toggleStyle}>
                Don't have an account?{" "}
                <button onClick={toggleView} style={toggleLinkStyle}>
                  Sign Up
                </button>
              </div>
            </>
          ) : (
            <>
              <Signup />
              <div style={toggleStyle}>
                Already have an account?{" "}
                <button onClick={toggleView} style={toggleLinkStyle}>
                  Log In
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
