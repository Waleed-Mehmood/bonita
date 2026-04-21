import React from "react";
import "./navbar.css";
import bonita from "../assets/bonita-logo.png";
import Image2 from "../assets/firstslide-second.png";
import Image3 from "../assets/firstslide-third.png";
import Image6 from "../assets/secondslide-third.png";
import Image9 from "../assets/thirdslide-third.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark transparent-navbar">
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
                <Link to='/' className="nav-link active" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/products' className="nav-link" href="#">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" href="#">
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

      {/* Slider */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide slider"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="slider-container">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/manicure-1623875537.png?crop=0.502xw:1.00xh;0.0867xw,0&resize=640:*"
                alt="Left"
                className="slider-img left-img"
              />
              <img
                src={Image6}
                alt="Center"
                className="slider-img center-img"
              />
              <img
                src="https://static-01.daraz.pk/p/8a452e648a2f53535f46e3df4b8d0646.jpg"
                alt="Right"
                className="slider-img right-img"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="slider-container">
              <img
                src="https://www.australianbeautyschool.com.au/wp-content/uploads/3.jpg"
                alt="Left"
                className="slider-img left-img"
              />
              <img
                src={Image3}
                alt="Center"
                className="slider-img center-img"
              />
              <img src={Image2} alt="Right" className="slider-img right-img" />
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="slider-container">
              <img
                src="https://iloveluscious.com/cdn/shop/files/Pink-Tuxedo-Medium-French-With-Pearl-Bow-Press-On-Nails-Luscious.png?v=1744276654&width=3840"
                alt="Left"
                className="slider-img left-img"
              />
              <img
                src={Image9}
                alt="Center"
                className="slider-img center-img"
              />
              <img
                src="https://sarangnails.com/wp-content/uploads/2021/12/132804739_220356639540959_9181213466884685313_n.jpg"
                alt="Right"
                className="slider-img right-img"
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
