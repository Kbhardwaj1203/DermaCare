import React, { useState, useEffect } from 'react';
import { products } from '../data/ProductData';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card slide-in">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <p>Rating: {product.rating}/5</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

const Products = () => {
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [sortBy, setSortBy] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    let result = [...products];

    if (filterCategory) {
      result = result.filter(product => product.category === filterCategory);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setSortedProducts(result);
  }, [sortBy, filterCategory]);

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-controls">
        <div className="sort-control">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Highest Rated</option>
          </select>
        </div>
        <div className="filter-control">
          <label htmlFor="category">Filter by Category:</label>
          <select id="category" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="product-grid">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;