import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import basket from "./utils/cart.png";
import BasketOffCanvas from "./BasketOffCanvas";
import Button from "react-bootstrap/Button";

function Checkout(props) {
  const { cart, cartQuantity, list, removeFromBasket, setList, totalPrice } =
    props;

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setList(false);
  };
  const handleShow = () => {
    setShow(true);
    setList(false);
  };
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

      {!show &&
        (list === true && cart.length === 0 ? (
          <div className="dropdwn">
            <div className="dropdwn-content">
              <p>Basket is empty</p>
            </div>
          </div>
        ) : (
          list === true &&
          cart.length > 0 && (
            <div className="dropdwn-content">
              <div className="basketOverview">
                <span className="b2">{cart.length} Items in your basket</span>
                <span className="b2"> £{totalPrice} </span>
                <div className="b3">
                  <button className="sqButton" onClick={handleShow}>
                    View Basket
                  </button>
                </div>
              </div>
              <ul>
                {cart.map(
                  ({ id, album, quantity, price, band, albumImage }) => (
                    <li key={id}>
                      <div className="basketItems">
                        <div className="basketImg">
                          <img src={albumImage} height="100px" alt="Album" />
                        </div>
                        <div className="basketDetails">
                          <ul>
                            <li>{album}</li>

                            <li>Quantity: {quantity}</li>
                            <li>Price: £{quantity * price}</li>
                          </ul>
                        </div>
                        <div className="basketDelete">
                          <Button
                            variant="dark"
                            onClick={e => {
                              removeFromBasket({ id }, e);
                              setList(false);
                              console.log(list);
                            }}
                          >
                            <span>X</span>
                          </Button>
                        </div>
                      </div>

                      <hr />
                    </li>
                  )
                )}
              </ul>
            </div>
          )
        ))}

      <BasketOffCanvas
        show={show}
        onHide={handleClose}
        cart={cart}
        removeFromBasket={removeFromBasket}
        setList={setList}
        list={list}
        totalPrice={totalPrice}
      />
    </>
  );
}

export default Checkout;
