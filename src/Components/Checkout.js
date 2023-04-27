import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import basket from "./utils/basket.png";

function Checkout(props) {
  const { cart, cartQuantity, list, removeFromBasket } = props;

  const handleClick = e => {
    alert("BBB");
  };

  if (!list) {
    return (
      <div className="checkout">
        <img
          src={basket}
          onClick={handleClick}
          className="basket"
          alt="Basket"
        />
        <div className="quantity">{cartQuantity}</div>
      </div>
    );
  } else if (cart.length === 0) {
    return (
      <div className="dropdwn">
        <div className="checkout">
          <img
            src={basket}
            className="basket"
            onClick={handleClick}
            alt="Basket"
          />
          <div className="quantity">{cartQuantity}</div>
        </div>
        <div className="dropdwn-content">
          <p>Basket is empty </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dropdwn">
        <div className="checkout">
          <img
            src={basket}
            onClick={handleClick}
            className="basket"
            alt="Basket"
          />
          <div className="quantity">{cartQuantity}</div>
        </div>
        <div className="dropdwn-content">
          Your basket:
          <ul>
            {cart.map(({ id, album, quantity, price, band }) => (
              <li key={id}>
                <h3>{band} </h3>
                {album} {quantity} £{quantity * price}{" "}
                <button onClick={e => removeFromBasket({ id }, e)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Checkout;
