import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-5">
      <div className="container-fluid navbar-container">

        {/* Logo */}
        <a className="navbar-brand brand-logo" href="#">
          <span className="logo-bmo">BMO</span>
          <span className="logo-leads"> Leads</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav navigation-menu">

            <li className="nav-item">
              <a className="nav-link animated-link" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link animated-link" href="#liveShowCase">
                Live Showcase
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link animated-link" href="#works">
                How It Works
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link animated-link" href="#security">
                Security
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link animated-link" href="#faq">
                FAQ
              </a>
            </li>

            <li className="nav-item cta-item">
              <a className="signup-btn" href="#started">
                Get Started
                <span className="arrow">→</span>
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;