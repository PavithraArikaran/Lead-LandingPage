import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid px-5">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <div className="logo-icon">T</div>
          <span className="logo-text">Typeface AI</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

            <li className="nav-item">
              <a className="nav-link" href="#product">
                Product
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#solutions">
                Solutions
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#company">
                Company
              </a>
            </li>

            <li className="nav-item ms-lg-2">
              <a className="signup-btn" href="#signup">
                Sign up
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;