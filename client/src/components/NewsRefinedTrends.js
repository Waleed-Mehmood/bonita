import React from "react";

const NewsRefinedTrends = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" style={{ color: "#D781A8" }}>
        News & Refined Trends
      </h2>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div className="card border-0">
            <img
              src="https://www.instyle.com/thmb/OuNvgI31DEQszRSdnYc1a3maVyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/315349817_2919033195072559_245054615584330312_n-f53f3b3147c046bf8c6812ce51dc02a5.jpg"
              alt="Best Nail Care"
              className="card-img-top rounded"
            />
            <div className="card-body">
              <h4 className="card-title">Best Nail Care</h4>
              <p className="card-text text-muted">
              Experience the best in nail care with treatments that prioritize both beauty and health. From premium products to expert techniques, enjoy a luxurious service that leaves your nails looking stunning and feeling rejuvenated.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div className="card border-0">
            <img
              src="https://edited.beautybay.com/wp-content/uploads/2022/06/avrnailswatches.jpg"
              alt="The Art of Nails"
              className="card-img-top rounded"
            />
            <div className="card-body">
              <h4 className="card-title">The Art Of Nails</h4>
              <p className="card-text text-muted">
              Nail care is not just a routine; it's an art form. With creativity and precision, every design becomes a masterpiece, allowing you to express your unique style through beautiful, carefully crafted nails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsRefinedTrends;
