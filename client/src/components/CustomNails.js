import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const CustomNails = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start mt-4 mt-lg-0 mb-3">
            <h2
              className="mb-4"
              style={{ color: "#D781A8", fontWeight: "bold" }}
            >
              Get a custom nail

            </h2>
            <p className="mb-4 text-muted">
            Tailored Design                                                                                                    
            </p>
            <p className="mb-4 text-muted">
            Choose from a variety of colors, patterns, and shapes to create a unique nail look that matches your style.                                                                                                    
            </p>
            <ul className="list-unstyled mb-4">
              <li>
                <strong>Express Your Personality</strong> Customize your nails to reflect your mood, occasion, or personal flair
              </li>
              <li>
                <strong>Nail Clippers</strong> Nisl suscipit adipiscing bibendum ultricies
              </li>
            </ul>
            <Link 
            to="/products"
              className="btn btn-pink px-4 py-2"
              style={{
                background: "#D781A8",
                color: "white",
                borderRadius: "25px",
              }}
            >
              Explore
            </Link>
          </div>

          <div className="col-12 col-lg-6 position-relative text-center">
            {/* Background Image */}
            <img
              src="https://5.imimg.com/data5/RG/IM/MY-3096082/mix-n-match-nail-art-500x500.jpg" // Replace with your background image URL
              alt="Background Nail"
              className="img-fluid rounded shadow"
              style={{ width: "100%", maxWidth: "450px" }}
            />
            {/* Foreground Image */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomNails;
