import React from 'react'
import './NavbarBackground.css'
import bonita from "../assets/bonita-logo.png";
import { Link } from 'react-router-dom';

const NavbarBackground = () => {
  return (
    <div>
      {/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-light custom-navbar">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img
        src={bonita}
        alt="Brand Logo"
        style={{ height: "44px", width: "auto" }}
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link " href="#">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link" href="#">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link" href="#">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link" href="#">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavbarBackground
