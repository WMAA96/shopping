import React, { useEffect, useState } from "react";

function Checkout(props) {
  const { cart, cartQuantity, list } = props;

  if (!list) {
    return <p>Checkout: {cartQuantity}</p>;
  } else {
    return (
      <div className="dropdwn">
        Checkout: {cartQuantity}
        <div className="dropdwn-content">
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
