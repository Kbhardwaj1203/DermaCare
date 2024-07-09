import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  return (
    <div className="cart">
      <div className="container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
              <div className="cart-buttons">
                <button onClick={clearCart}>Clear Cart</button>
                <button onClick={() => alert('Proceeding to checkout...')}>Buy Now</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;