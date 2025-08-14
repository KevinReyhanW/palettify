import {
  Home,
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  Star, 
  Heart, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import '../../styles/components/previews/Ecommerce.css';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFavorite: true
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 79.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 4,
    name: 'Phone Case',
    price: 29.99,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBjYXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  }
];

export function Ecommerce() {
  return (
    <div className="ecommerce-preview">
      {/* Mobile Header */}
      <header className="mobile-header">
        <button className="menu-button">
          <Menu size={24} />
        </button>
        <h1>ShopNow</h1>
        <div className="mobile-icons">
          <button className="icon-button">
            <Search size={20} />
          </button>
          <button className="icon-button">
            <ShoppingCart size={20} />
            <span className="cart-badge">3</span>
          </button>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="desktop-header">
        <div className="logo">ShopNow</div>
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search products..." />
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Deals</a>
        </nav>
        <div className="user-actions">
          <button className="icon-button">
            <User size={20} />
          </button>
          <button className="icon-button cart-button">
            <ShoppingCart size={20} />
            <span className="cart-badge">3</span>
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="hero-banner">
        <button className="carousel-button left">
          <ChevronLeft size={24} />
        </button>
        <div className="banner-content">
          <h2>Summer Sale</h2>
          <p>Up to 50% off on selected items</p>
          <button className="shop-button">Shop Now</button>
        </div>
        <button className="carousel-button right">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-container">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <button className={`favorite-button ${product.isFavorite ? 'active' : ''}`}>
                <Heart size={18} fill={product.isFavorite ? 'currentColor' : 'none'} />
              </button>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                    />
                  ))}
                  <span>({product.rating})</span>
                </div>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="mobile-bottom-nav">
        <button className="nav-button active">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button className="nav-button">
          <Search size={20} />
          <span>Search</span>
        </button>
        <button className="nav-button cart-button">
          <ShoppingCart size={20} />
          <span>Cart</span>
          <span className="cart-badge">3</span>
        </button>
        <button className="nav-button">
          <User size={20} />
          <span>Account</span>
        </button>
      </nav>
    </div>
  );
}