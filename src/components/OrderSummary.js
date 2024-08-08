import React from 'react';
import OrderItem from './OrderItem';
import '../styles/OrderSummary.css';

const OrderSummary = ({ order, onIncrease, onDecrease }) => {
  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {order.map((item, index) => (
        <OrderItem
          key={item.name} // Use a unique key
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onIncrease={() => onIncrease(index)}
          onDecrease={() => onDecrease(index)}
        />
      ))}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default OrderSummary;
