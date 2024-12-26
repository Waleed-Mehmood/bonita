import React from "react";

export default function AboutStore() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6  text-center text-lg-start mt-4 mt-lg-0 mb-4">
            <h2
              className="mb-4"
              style={{ color: "#ff8ebf", fontWeight: "bold" }}
            >
              WELCOME!
            </h2>
            <p className="mb-4 text-muted">ABOUT OUR STORE</p>
            <p className="mb-4 text-muted">
            At Bonita, we believe that beauty begins at your fingertips. We are a dedicated nail care company committed to providing premium nail services and products that inspire confidence and elegance. Our mission is to help you express your individuality through stunning nail artistry and exceptional care.
            </p>
            <p className="mb-4 text-muted">
            Whether you're looking for classic manicures, intricate nail designs, or advanced nail treatments, our highly skilled professionals are here to ensure you receive a luxurious and relaxing experience. At Bonita, we use top-quality products and stay updated with the latest trends in nail fashion to deliver results that are both beautiful and lasting.


            </p>
            <p className="mb-4 text-muted">
            More than just a nail service provider, Bonita is a community where self-care and creativity come together. Let us help you elevate your nail care routine and embrace the art of nails with style and sophistication.
            </p>
            <p className="mb-4 text-muted">
            Your nails, your statement — only with Bonita. 💅
            </p>

            <button
              className="btn btn-pink px-4 py-2"
              style={{
                background: "#ff8ebf",
                color: "white",
                borderRadius: "25px",
              }}
            >
              Explore Products
            </button>
          </div>

          <div className="col-12 col-lg-6 position-relative text-center">
            {/* Background Image */}
            <img
              src="https://lirp.cdn-website.com/62a4c034/dms3rep/multi/opt/266041337_131977585925898_790105230352298630_n-640w.jpg" // Replace with your background image URL
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
}
