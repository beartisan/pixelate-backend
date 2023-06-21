import React from "react";

export default function Header({ handleLoginClick, handleSignupClick }) {
  return (
    <header id="header">
      <h2 id="site-name">
        <a href="/">Pixelate</a>
      </h2>
      <nav>
        <ul id="navbar" className="navbar">
          <li className="nav-item">
            <a href="#" onClick={handleLoginClick}>
              Log-In
            </a>
          </li>
          <li className="nav-item">
            <a href="#" onClick={handleSignupClick}>
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
