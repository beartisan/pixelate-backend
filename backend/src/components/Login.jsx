import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!email || !password) {
      if (!email) setIsValidEmail(false);
      if (!password) setIsValidPassword(false);
      return;
    }

    // Form is valid, submit the data
    console.log("Form submitted");
    // Add your logic for form submission here
  };

  return (
    <section id="login">
      <div className="section-container">
        <div className="login-form">
          <h2 className="title">Log-In to your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange} placeholder="email@address.com" className="input-field"
              />
              {!isValidEmail && <p className="error">Please enter a valid email</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange} placeholder="Enter your password" className="input-field"
              />
              {!isValidPassword && <p className="error">Please enter a password</p>}
            </div>
            <button type="submit" className="submit-button">Log-In</button>
          </form>
        </div>
      </div>
    </section>
  );
}