import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import basket from "./utils/basket.png";
import Offcanvas from "react-bootstrap/Offcanvas";
function Checkout(props) {
  const { cart, cartQuantity, list, removeFromBasket } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = e => {
    alert("BBB");
  };

  return (
    <>
      <div className="checkout">
        <img
          src={basket}
          onClick={handleShow}
          className="basket"
          alt="Basket"
        />
        <div className="quantity">{cartQuantity}</div>
      </div>
      {list === true && cart.length === 0 ? (
        <div className="dropdwn">
          <div className="dropdwn-content">
            <p>Basket is empty</p>
          </div>
        </div>
      ) : (
        list === true &&
        cart.length > 0 && (
          <div className="dropdwn-content">
            Your basket:
            <ul>
              {cart.map(({ id, album, quantity, price, band }) => (
                <li key={id}>
                  <h3>{band}</h3>
                  {album} {quantity} £{quantity * price}{" "}
                  <button onClick={e => removeFromBasket({ id }, e)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </>
  );
}

export default Checkout;
