import React, { useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };


  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

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
    if (!firstName || !lastName || !userName || !email || !password) {
      // Handle form validation errors
      return;
    }

    // Perform password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setIsValidPassword(false);
      return;
    }

    // Form is valid, submit the data
    console.log("Form submitted");
    // Add your logic for creating an account here
  };

  return (
    <section id="signup">
    <div className="section-container">
      <div className="signup-form">
        <h2 className="title">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="name-group">
              <div className="name-field">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  placeholder="Enter your First Name"
                  className="input-field with-border"
                />
              </div>
              <div className="name-field">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={handleLastNameChange}
                  placeholder="Enter your last name"
                  className="input-field with-border"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
              placeholder="Enter your username"
              className="input-field with-border"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="email@address.com"
              className="input-field"
            />
            {!isValidEmail && <p className="error">Please enter a valid email</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="input-field"
            />
            {!isValidPassword && (
              <p className="error">
                Password must contain at least one uppercase letter, one lowercase letter, and one number.
              </p>
            )}
          </div>
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
      </div>
    </div>
  </section>
);
}