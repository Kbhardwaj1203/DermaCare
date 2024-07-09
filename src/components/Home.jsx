
import React from 'react';
import ProductCarousel from './ProductCarousel';


const Home = () => {
  return (
    <div className="home">
      <section className="hero fade-in">
        <h1>Welcome to DermaCare</h1>
        <p>Discover the best products for your skin</p>
      </section>
      <section className="products-carousel slide-in">
        <ProductCarousel />
      </section>
    </div>
  );
};

export default Home;