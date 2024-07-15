import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">DermaCare</Link>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/products" onClick={toggleMenu}>Products</Link>
          <Link to="/offers" onClick={toggleMenu}>Offers</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
        </div>
        
        <div className="navbar-actions">
          <Link to="/cart" className="cart-icon">
            🛒 {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </Link>
          <button className="auth-button">Login/Signup</button>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
