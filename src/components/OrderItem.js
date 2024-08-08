import { useEffect } from 'react';
import React from 'react';
import '../styles/OrderItem.css';


const OrderItem = ({ name, price, quantity, onIncrease, onDecrease }) => {
  useEffect(() => {
    console.log(`OrderItem rendered: ${name}`);
  }, [name, quantity]);

  return (
    <div className="order-item">
      <h5>{name}</h5>
      <p>${price}</p>
      <div className="quantity-control">
        <button className="btn btn-secondary" onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button className="btn btn-secondary" onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default OrderItem;