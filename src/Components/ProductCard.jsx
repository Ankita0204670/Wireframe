function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image || "https://via.placeholder.com/250x250?text=Uniform"} alt={product.name} />
      <div className="product-info">
        <h4>{product.name}</h4>
        <p className="category">School Uniform</p>
        <p className="price">₹{product.price}</p>
        <button className="btn-profile save-btn" style={{ width: '100%', marginTop: '10px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;