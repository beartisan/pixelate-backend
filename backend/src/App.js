import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <div>
      <Header handleLoginClick={handleLoginClick} handleSignupClick={handleSignupClick} />
      <main>
        {showLogin && <Login />}
        {showSignup && <Signup />}
      </main>
      <Footer />
    </div>
  );
}