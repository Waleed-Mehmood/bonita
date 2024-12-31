import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Images */}
          <div className="col-12 col-lg-6 position-relative text-center">
            {/* Background Image */}
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/lead-image-summer-nails-01-1648761556.jpg?crop=0.502xw:1.00xh;0.218xw,0&resize=640:*" // Replace with your background image URL
              alt="Background Nail"
              className="img-fluid rounded shadow"
              style={{ width: "100%", maxWidth: "450px" }}
            />
          </div>

          {/* Right Side: Text and Button */}
          <div className="col-12 col-lg-6 text-center text-lg-start mt-4 mt-lg-0">
            <h2
              className="mb-4"
              style={{ color: "#D781A8", fontWeight: "bold" }}
            >
              Contact US
            </h2>
            <p className="mb-4 text-muted">
            give us a call to schedule a treatment 
            </p>
            <ul className="list-unstyled mb-4">
              <li>
                <strong>(123) 675 5656</strong> 
              </li>
              
            </ul>
            <Link
            to='/contact'
              className="btn btn-pink px-4 py-2"
              style={{
                background: "#D781A8",
                color: "white",
                borderRadius: "25px",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
