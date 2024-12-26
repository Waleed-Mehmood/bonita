import React from "react";
import Footer from "../components/Footer";
import "./products.css";
import leftSide from "../assets/rightSide.png";
import rightSide from "../assets/leftside.png";
import NavbarBackground from "../components/NavbarBackground";

export default function Products() {

    const products = [
        { id: 1, name: "Diamond Sparkle", price: "Rs1,800.00", image: "https://lirp.cdn-website.com/62a4c034/dms3rep/multi/opt/266041337_131977585925898_790105230352298630_n-640w.jpg" },
        { id: 2, name: "Crystal Bliss", price: "Rs1,600.00", image: "https://i.pinimg.com/564x/8c/60/13/8c60138c8ade42492d65fc41e9260c64.jpg" },
        { id: 3, name: "Rose Gold Elegance", price: "Rs1,700.00", image: "https://www.byrdie.com/thmb/zQ9CxzV_WYJMjs1xpMfX0Uho1zk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mint-Green-Floral-Nails-Byrdie-Spring-Gel-Nails-9f7304aab67945cf8c3a1fd972026085.jpg" },
        { id: 4, name: "Sunset Glow", price: "Rs1,650.00", image: "https://hips.hearstapps.com/hmg-prod/images/288840569-1090446238214998-64149332219322837-n-64bad641d0b38.jpg?crop=1xw:1xh;center,top&resize=980:*" },
        { id: 5, name: "Ocean Breeze", price: "Rs1,500.00", image: "https://t3.ftcdn.net/jpg/03/97/00/46/360_F_397004694_dA9u8WMzFLGXnkiS4I1BzRo7ph9En3sG.jpg" },
        { id: 6, name: "Glitter Galaxy", price: "Rs1,750.00", image: "https://hips.hearstapps.com/hmg-prod/images/christmas-nails-2024-673b825138d4b.png?crop=0.498xw:1.00xh;0,0&resize=1200:*" },
        { id: 7, name: "Velvet Rose", price: "Rs1,600.00", image: "https://t3.ftcdn.net/jpg/02/95/66/76/360_F_295667624_xEWO0cGDvGO2ydqOpQaW7KG0Nlh9JXb7.jpg" },
        { id: 8, name: "Midnight Sparkle", price: "Rs1,800.00", image: "https://assets.vogue.com/photos/6750bbf86957fed9ef341772/1:1/w_1080,h_1080,c_limit/Snapinsta.app_468562235_1263107868265607_3035628067845313725_n_1080.jpg" },
        { id: 9, name: "Sapphire Dream", price: "Rs1,650.00", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQLiO2NOz0tchENwPikCKBdjAqOUZLkRswcA&s" },
        { id: 10, name: "Neon Nights", price: "Rs1,700.00", image: "https://img.freepik.com/free-photo/neon-nail-art-gel-polish_1150-3190.jpg" },
        { id: 11, name: "Lavender Glow", price: "Rs1,550.00", image: "https://i.pinimg.com/736x/9c/31/ff/9c31ffb98e162c8970dc07dede19774d.jpg" },
        { id: 12, name: "Frosted Pearl", price: "Rs1,650.00", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTxGCsYG_GDDM_1uiBhP6zxqWVih-tO9GCA&s" },
        { id: 13, name: "Tropical Vibes", price: "Rs1,700.00", image: "https://www.hola.com/us/horizon/landscape/62efa2cee892-tropical-nails-t.jpg" },
        { id: 14, name: "Candy Crush", price: "Rs1,500.00", image: "https://i.pinimg.com/originals/97/39/d9/9739d9cc9ee9ef3af14f767729a7aeb4.jpg" },
        { id: 15, name: "Pearl Essence", price: "Rs1,800.00", image: "https://powderfulnails.com/cdn/shop/files/PearlEssence_1d588f78-3d89-49ae-a7d8-1f43f26a8fbc_2048x.png?v=1708972512" },
        { id: 16, name: "Misty Rose", price: "Rs1,600.00", image: "https://luxegel.com/cdn/shop/products/MistyRose.jpg?v=1632223015&width=1280" },
    ];

      const categories = ["Bling Nails", "Artsy Nails", "Bridal Nails", "Best Sellers"];

  return (
    <>
    <NavbarBackground />
      <section className="shop-section d-flex align-items-center justify-content-center position-relative">
        {/* Left Image */}
        <img
          src={leftSide}
          alt="Left Hand"
          className="position-absolute left-image"
        />
        {/* Main Content */}
        <div className="text-center">
          <h1 className="shop-title">Products</h1>
          <p className="breadcrumb">
            <span>Home</span> &gt; <span className="active">Products</span>
          </p>
        </div>
        {/* Right Image */}
        <img
          src={rightSide}
          alt="Right Hand"
          className="position-absolute right-image"
        />
      </section>

      <div className="container py-4">
      <div className="row">
        {/* Left Side - Categories */}
        <div className="col-md-3 col-12 mb-3">
          <h5 className="text-dark fw-bold">Product Categories</h5>
          <ul className="list-unstyled">
            {categories.map((category, index) => (
              <li key={index} className="mb-2">
                <button className="btn btn-light text-pink fw-bold rounded-pill w-100 text-start">
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Products */}
        <div className="col-md-9 col-12">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="text-dark fw-bold mb-0">All Products</h5>
              <small className="text-muted ">New Products</small>
            </div>
            <p className="text-muted mb-0">100 products</p>
          </div>

          {/* Products Grid */}
          <div className="row g-4">
            {products.map((product) => (
              <div key={product.id} className="col-sm-6 col-lg-4 col-xl-3" style={{cursor: "pointer"}}>
                <div className="card border-0 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title fw-bold">{product.name}</h6>
                    <p className="card-text text-muted">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

      <Footer />
    </>
  );
}
