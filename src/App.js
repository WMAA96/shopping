import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {}, [cart]);

  const addtoCart = (adding, quantity) => {
    console.log(adding);

    if (cart.includes(adding)) {
      changeBasketQuantity(adding, quantity);
    } else {
      adding.quantity = quantity;
      setCart(oldArray => [...oldArray, adding]);
    }
  };

  const cartQuantity = () => {
    return cart.reduce((total, cart) => cart.quantity + total, 0);
  };

  const changeBasketQuantity = (adding, quantity) => {
    let newCart = [...cart];
    const currentProduct = newCart.find(cart => cart.id === adding.id);
    currentProduct.quantity = currentProduct.quantity + quantity;
    setCart(newCart);
  };

  const removeFromBasket = (removeID, e) => {
    let currentProduct = cart.find(cart => cart.id === removeID.id);
    currentProduct.quantity = 1;

    const newCart = cart.filter(cart => cart.id !== removeID.id);

    setCart(newCart);
    console.log(newCart);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          cartQuantity={cartQuantity}
          cart={cart}
          removeFromBasket={removeFromBasket}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Shop"
            element={<Shop cart={cart} addtoCart={addtoCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
