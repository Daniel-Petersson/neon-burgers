//OrderSummary.js
import React from 'react';
import '../styles/OrderSummary.css';

const OrderSummary = ({ order, increaseQuantity, decreaseQuantity }) => {
  const calculateTotal = () => {
    return order
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {order.map((item, index) => (
        <div key={index} className="order-item">
          <div className="item-info">
            <h5>{item.name}</h5>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <div className="quantity-control">
            <button
              className="btn btn-secondary"
              onClick={() => decreaseQuantity(item.name)}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              className="btn btn-secondary"
              onClick={() => increaseQuantity(item.name)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default OrderSummary;

