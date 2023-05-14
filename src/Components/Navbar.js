import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Nbar(props) {
  const { cart, cartQuantity, removeFromBasket, totalPrice } = props;

  const [list, setList] = useState(false);

  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>Music Shop</Navbar.Brand>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/shop">
          Shop
        </Navbar.Brand>
        <Navbar.Brand
          onMouseEnter={() => setList(true)}
          onMouseLeave={() => setList(false)}
        >
          <Checkout
            cartQuantity={cartQuantity()}
            list={list}
            setList={setList}
            cart={cart}
            removeFromBasket={removeFromBasket}
            totalPrice={totalPrice}
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nbar;
