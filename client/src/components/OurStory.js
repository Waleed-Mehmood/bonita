import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import story1 from "../assets/story1.png";
import story2 from "../assets/story2.png";
import { Link } from "react-router-dom";
const OurStory = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Images */}
          <div className="col-12 col-lg-6 position-relative text-center">
            {/* Background Image */}
            <img
              src="https://images.hellomagazine.com/horizon/original_aspect_ratio/afe5d099f07e-snapinstaapp31263452753606573973357042360148331738366435n1080.jpg" // Replace with your background image URL
              alt="Background Nail"
              className="img-fluid rounded shadow"
              style={{ width: "100%", maxWidth: "450px" }}
            />
            {/* Foreground Image */}
            <img
              src="https://i.pinimg.com/originals/d4/53/eb/d453eb44512a8c94facdffa8e9e88d8d.jpg"
              alt="Foreground Nail"
              className="img-fluid rounded-circle shadow position-absolute d-none d-md-block"
              style={{
                width: "150px",
                bottom: "-20px",
                right: "-30px",
                border: "4px solid white",
              }}
            />
          </div>

          {/* Right Side: Text and Button */}
          <div className="col-12 col-lg-6 text-center text-lg-start mt-4 mt-lg-0">
            <h2
              className="mb-4"
              style={{ color: "#ff8ebf", fontWeight: "bold" }}
            >
              OUR STORY
            </h2>
            <p className="mb-4 text-muted">
            At Bonita, we’re dedicated to enhancing your beauty with high-quality nail care and creative designs. Our mission is to provide a personalized, luxurious experience that leaves you feeling pampered and confident.
            </p>
            <ul className="list-unstyled mb-4">
              <li>
                <strong>Nail Art with a Personal Touch</strong>  At Bonita, we create stunning nail designs tailored to your style, offering premium care and attention to detail.
              </li>
              <li>
                <strong>Where Beauty Meets Quality</strong> Bonita delivers exceptional nail care services, combining creativity with the highest standards of quality for a truly personalized experience.
              </li>
            </ul>
            <Link
              to='/products'
              className="btn btn-pink px-4 py-2"
              style={{
                background: "#ff8ebf",
                color: "white",
                borderRadius: "25px",
              }}
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
