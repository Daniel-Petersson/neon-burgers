//Menu.js
import React from 'react';
import MenuItem from './MenuItem';
import '../styles/Menu.css'; // Updated path

// Import all images
import neonCheeseburgerImg from '../assets/neon-cheeseburger.jpg';
import electricBlueBurgerImg from '../assets/electric-blue-burger.jpg';
import retroChickenSandwichImg from '../assets/retro-chicken-sandwich.jpg';
import synthwaveVeggieBurgerImg from '../assets/synthwave-veggie-burger.jpg';
import discoFriesImg from '../assets/disco-fries.jpg';
import flashbackFishFilletImg from '../assets/flashback-fish-fillet.jpg';
import glowInTheDarkOnionRingsImg from '../assets/glow-in-the-dark-onion-rings.jpg';
import pacManPepperoniPizzaImg from '../assets/pac-man-pepperoni-pizza.jpg';
import arcadeChickenNuggetsImg from '../assets/arcade-chicken-nuggets.jpg';
import radicalRibSandwichImg from '../assets/radical-rib-sandwich.jpg';
import totallyTubularTacoImg from '../assets/totally-tubular-taco.jpg';
import miamiViceMilkshakeImg from '../assets/miami-vice-milkshake.jpg';

const menuItems = [
  {
    name: 'Neon Cheeseburger',
    price: 8.99,
    image: neonCheeseburgerImg,
  },
  {
    name: 'Electric Blue Bacon Burger',
    price: 9.99,
    image: electricBlueBurgerImg,
  },
  {
    name: 'Retro Chicken Sandwich',
    price: 7.99,
    image: retroChickenSandwichImg,
  },
  {
    name: 'Synthwave Veggie Burger',
    price: 7.49,
    image: synthwaveVeggieBurgerImg,
  },
  {
    name: 'Disco Fries',
    price: 3.99,
    image: discoFriesImg,
  },
  {
    name: 'Flashback Fish Fillet',
    price: 8.49,
    image: flashbackFishFilletImg,
  },
  {
    name: 'Glow-in-the-Dark Onion Rings',
    price: 4.99,
    image: glowInTheDarkOnionRingsImg,
  },
  {
    name: 'Pac-Man Pepperoni Pizza',
    price: 10.99,
    image: pacManPepperoniPizzaImg,
  },
  {
    name: 'Arcade Chicken Nuggets',
    price: 5.99,
    image: arcadeChickenNuggetsImg,
  },
  {
    name: 'Radical Rib Sandwich',
    price: 8.99,
    image: radicalRibSandwichImg,
  },
  {
    name: 'Totally Tubular Taco',
    price: 6.99,
    image: totallyTubularTacoImg,
  },
  {
    name: 'Miami Vice Milkshake',
    price: 4.49,
    image: miamiViceMilkshakeImg,
  },
];
const Menu = ({ addToOrder }) => {
  return (
    <div className="row">
      {menuItems.map((item, index) => (
        <div key={index}>
          <MenuItem
            name={item.name}
            price={item.price}
            image={item.image}
            addToOrder={() => addToOrder(item)} // Pass item data to addToOrder
          />
        </div>
      ))}
    </div>
  );
};

export default Menu;
