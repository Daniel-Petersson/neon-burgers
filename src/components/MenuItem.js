//MenuItem.js
import React from 'react';
import '../styles/MenuItem.css'; // Updated path

const MenuItem = ({ name, price, image, addToOrder }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 menu-item">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <button className="btn btn-primary" onClick={addToOrder}>
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
