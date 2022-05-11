import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  const { cart } = props;

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
        <li>Checkout: {cart.length} </li>
      </ul>
    </nav>
  );
}

export default Navbar;
