'use client';

import './Ecommerce.css';

export function Ecommerce() {
  return (
    <div className="e-commerce">
      <header className="shop-header">
        <div className="shop-nav">
          <div className="logo">Store</div>
          <nav>
            <ul>
              <li>New Arrivals</li>
              <li>Categories</li>
              <li>Sale</li>
              <li>Trending</li>
            </ul>
          </nav>
          <div className="cart">Cart (0)</div>
        </div>
      </header>
      <main className="shop-main">
        <aside className="filters">
          <h3 onClick={(e) => {
            const filters = e.currentTarget.closest('.filters');
            if (window.innerWidth <= 768) {
              filters?.classList.toggle('filters-expanded');
            }
          }}>Filter Products</h3>
          <div className="filter-content">
            <div className="filter-section">
              <h4>Categories</h4>
              <label><input type="checkbox" /> Clothing</label>
              <label><input type="checkbox" /> Accessories</label>
              <label><input type="checkbox" /> Footwear</label>
            </div>
            <div className="filter-section">
              <h4>Price Range</h4>
              <label><input type="checkbox" /> Under $50</label>
              <label><input type="checkbox" /> $50 - $100</label>
              <label><input type="checkbox" /> Over $100</label>
            </div>
          </div>
        </aside>
        <div className="products-grid">
          {[
            { name: "Sleek Watch", price: 199.99, image: "⌚" },
            { name: "Designer Bag", price: 299.99, image: "👜" },
            { name: "Smart Glasses", price: 149.99, image: "👓" },
            { name: "Running Shoes", price: 89.99, image: "👟" },
            { name: "Leather Wallet", price: 59.99, image: "💼" },
            { name: "Wireless Earbuds", price: 129.99, image: "🎧" }
          ].map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <span className="product-emoji">{product.image}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
