import React from 'react';
import MenuItem from './MenuItem';
import '../styles/Menu.css'; // Updated path

const menuItems = [
    {
      name: 'Neon Cheeseburger',
      price: 8.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Electric Blue Bacon Burger',
      price: 9.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Retro Chicken Sandwich',
      price: 7.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Synthwave Veggie Burger',
      price: 7.49,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Disco Fries',
      price: 3.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Flashback Fish Fillet',
      price: 8.49,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Glow-in-the-Dark Onion Rings',
      price: 4.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Pac-Man Pepperoni Pizza',
      price: 10.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Arcade Chicken Nuggets',
      price: 5.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Radical Rib Sandwich',
      price: 8.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Totally Tubular Taco',
      price: 6.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Miami Vice Milkshake',
      price: 4.49,
      image: 'https://via.placeholder.com/150',
    },
  ];
  
  const Menu = ({ addToOrder }) => {
    return (
      <div className="row">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
            addToOrder={() => addToOrder(item)}
          />
        ))}
      </div>
    );
  };
  
  export default Menu;