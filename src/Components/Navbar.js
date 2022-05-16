import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
function Navbar(props) {
  const { cart, cartQuantity, removeFromBasket } = props;

  const [list, setList] = useState(false);

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="navLinks">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Shop">
          <li>Shop</li>
        </Link>
        <li
          onMouseEnter={() => setList(true)}
          onMouseLeave={() => setList(false)}
        >
          <Checkout
            cartQuantity={cartQuantity()}
            list={list}
            cart={cart}
            removeFromBasket={removeFromBasket}
          />{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
