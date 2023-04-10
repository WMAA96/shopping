import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Checkout(props) {
  const { cart, cartQuantity, list, removeFromBasket } = props;

  if (!list) {
    return <Link to="/">Checkout: {cartQuantity}</Link>;
  } else if (cart.length === 0) {
    return (
      <div className="dropdwn">
        Checkout: {cartQuantity}
        <div className="dropdwn-content">
          <p>Basket is empty </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dropdwn">
        Checkout: {cartQuantity}
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
