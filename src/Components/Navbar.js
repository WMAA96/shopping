import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
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
      </ul>
    </nav>
  );
}

export default Navbar;
