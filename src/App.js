import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Menu from './components/Menu';
import OrderSummary from './components/OrderSummary';
import './App.css';


const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [order, setOrder] = useState([]); // Order state

  useEffect(() => {
    console.log('App rendered');
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  }, []);

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(orderItem => orderItem.name === item.name);
      if (existingItem) {
        return prevOrder.map(orderItem =>
          orderItem.name === item.name
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      } else {
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (itemName) => {
    setOrder((prevOrder) =>
      prevOrder.map(item =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemName) => {
    setOrder((prevOrder) =>
      prevOrder
        .map(item =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0) // Remove item if quantity becomes 0
    );
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <div className="main-content">
        <Menu addToOrder={addToOrder} />
        <OrderSummary
          order={order}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
    </div>
  );
};

export default App;


