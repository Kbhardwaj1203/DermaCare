import React, { useState, useEffect } from 'react';
// import './ProductCarousel.css';
import { useCart } from '../context/CartContext';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      title: "Hydrating Face Cream",
      description: "A deeply moisturizing cream for all skin types",
      image: "https://img.freepik.com/free-photo/young-woman-raises-palms-face-keeps-eyes-closed-shows-white-teeth-uses-cleansing-foam-skin-care-gets-real-pleasure_273609-33241.jpg",
      price: 29.99,
      rating: 4.5
    },
    {
      id: 2,
      title: "Vitamin C Serum",
      description: "Brightening serum to even skin tone and reduce fine lines",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
      price: 34.99,
      rating: 4.7
    },
    {
      id: 3,
      title: "Gentle Cleansing Foam",
      description: "Soft, foaming cleanser for sensitive skin",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a",
      price: 19.99,
      rating: 4.3
    },
    {
      id: 4,
      title: "Exfoliating Scrub",
      description: "Removes dead skin cells for a smoother complexion",
      image: "https://images.unsplash.com/photo-1567721913486-6585f069b332",
      price: 24.99,
      rating: 4.6
    },
    {
      id: 5,
      title: "Night Repair Cream",
      description: "Rejuvenating overnight treatment for youthful skin",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
      price: 39.99,
      rating: 4.8
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (products.length - 2));
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) => (prevSlide - 1 + products.length - 2) % (products.length - 2));
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`Added ${product.title} to cart`);
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="star" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }

    return stars;
  };

  return (
    <div className="product-carousel">
      <h2>Featured Products</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide} disabled={isAnimating}>&lt;</button>
        <button className="carousel-button next" onClick={nextSlide} disabled={isAnimating}>&gt;</button>
        <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="description">{product.description}</p>
                <div className="rating">{renderRatingStars(product.rating)}</div>
                <p className="price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;