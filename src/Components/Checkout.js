import React, { useEffect, useState } from "react";

function Checkout(props) {
  const { cart, cartQuantity, list } = props;

  if (!list) {
    return <p>Checkout: {cartQuantity}</p>;
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
                {album} {quantity} £{quantity * price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Checkout;
