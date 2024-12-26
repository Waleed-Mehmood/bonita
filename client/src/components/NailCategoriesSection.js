import React from "react";

const NailCategoriesSection = () => {
  const categories = [
    {
      id: 1,
      title: "Bling Nails",
      image:
        "https://i.pinimg.com/originals/83/45/93/834593958327da942198ab84d80faa29.jpg",
    },
    {
      id: 2,
      title: "Artsy Nails",
      image:
        "https://www.clearjellystamper.com/cdn/shop/files/cjs-334-artsy-line-art-steel-layered-nail-art-stamping-plate-rose-palm-leaves.jpg?v=1715191633&width=1226",
    },
    {
      id: 3,
      title: "Bridal Nails",
      image: "https://lovelynails.pk/cdn/shop/files/166.webp?v=1721378484",
    },
    {
      id: 4,
      title: "Best Sellers",
      image:
        "https://www.realstylenetwork.com/beauty/wp-content/uploads/sites/3/2017/01/GRAPHIC-NAILS-3.jpg",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5" style={{ color: "#ff8ebf" }}>
          Our Nail Products
        </h2>
        <div className="row text-center">
          {categories.map((category) => (
            <div key={category.id} className="col-12 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm" style={{backgroundColor: "#ff8dbe"}}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NailCategoriesSection;
