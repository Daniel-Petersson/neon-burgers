import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Menu from './components/Menu';
import OrderSummary from './components/OrderSummary';
import './App.css';

const App = () => {
  const [order, setOrder] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    console.log('App rendered');
  });

  const addToOrder = useCallback((item) => {
    setOrder((prevOrder) => {
      const itemIndex = prevOrder.findIndex((orderItem) => orderItem.name === item.name);
      if (itemIndex >= 0) {
        const updatedOrder = [...prevOrder];
        updatedOrder[itemIndex].quantity += 1;
        return updatedOrder;
      } else {
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  }, []);

  const increaseQuantity = useCallback((index) => {
    console.log('Increasing quantity for item at index:', index);
    setOrder((prevOrder) => {
      const updatedOrder = [...prevOrder];
      updatedOrder[index].quantity += 1;
      console.log('Updated order:', updatedOrder);
      return updatedOrder;
    });
  }, []);

  const decreaseQuantity = useCallback((index) => {
    console.log('Decreasing quantity for item at index:', index);
    setOrder((prevOrder) => {
      const updatedOrder = [...prevOrder];
      if (updatedOrder[index].quantity > 1) {
        updatedOrder[index].quantity -= 1;
      } else {
        updatedOrder.splice(index, 1);
      }
      console.log('Updated order:', updatedOrder);
      return updatedOrder;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  }, []);

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <div className="main-content">
        <Menu addToOrder={addToOrder} />
        <OrderSummary order={order} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} />
      </div>
    </div>
  );
};

export default App;
