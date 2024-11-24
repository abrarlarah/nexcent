import React from "react";
import "./Header.css";

const Header = () => {
  return (



    <header className="header">
    <div className="logo">
      <img src="/images/logo.png" alt="Logo" className="logo-image" />
      <strong>Nexcent</strong>
    </div>
  
    <div className="right-container">
      <nav>
        <ul className="nav-links">
          <li><a href="#Home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#blog">community</a></li>
          <li><a href="#blogss">Blog</a></li>
          <li><a href="#featuress">Pricing</a></li>
        </ul>
      </nav>
      <button className="register-button">Register Now    →</button>
    </div>
  </header>
  
  );
};

export default Header;
