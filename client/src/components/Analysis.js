import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from '../assets/image-1.png';
import img2 from '../assets/image-2.png';
import img3 from '../assets/image.png';
const Analysis = () => {
  const articles = [
    {
      image: img1, // Replace with your actual image URL
      title: "Flashes Buy Signal, but Investors May Not Be Interested",
      time: "4 mins",
      date: "May 29, 2024",
    },
    {
      image: img2, // Replace with your actual image URL
      title: "Flashes Buy Signal, but Investors May Not Be Interested",
      time: "4 mins",
      date: "May 29, 2024",
    },
    {
      image: img3, // Replace with your actual image URL
      title: "Flashes Buy Signal, but Investors May Not Be Interested",
      time: "4 mins",
      date: "May 29, 2024",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Section Title */}
        <h2 className=" mb-5" style={{ color: "#D781A8" }}>
          Analysis
        </h2>
        {/* Row of Cards */}
        <div className="row">
          {articles.map((article, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div className="card border-0  h-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="card-img-top rounded"
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "1.1rem" }}>
                    {article.title}
                  </h5>
                  <p className="card-text text-muted mb-0">
                    {article.time} | {article.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analysis;
