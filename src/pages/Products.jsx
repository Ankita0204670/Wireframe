import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";

import shirtImg from "../assets/ShirtPant.jpeg";
import blazerImg from "../assets/Blazer.jpeg";

function Products() {
  // Sample data (later replace with API)
  const [products, setProducts] = useState([
    { id: 1, name: "Formal Uniform", price: 1500, image: shirtImg },
    { id: 3, name: "Premium Blazer", price: 1500, image: blazerImg }
  ]);

  const [sortType, setSortType] = useState("default");

  const handleSort = (e) => {
    const value = e.target.value;
    setSortType(value);

    let sorted = [...products];

    if (value === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setProducts(sorted);
  };

  return (
    <>
      <Header />

      <main className="view-uniforms-page">
        <div className="container">
          <section className="products-section">

            {/* Toolbar */}
            <div className="toolbar">
              <h2>Our Uniform Collection</h2>
              <div className="sort-options">
              </div>
            </div>

            {/* Product Grid */}
            <div className="product-grid">
              {products.length === 0 ? (
                <p className="no-results-message">
                  No uniforms found.
                </p>
              ) : (
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </div>

          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Products;