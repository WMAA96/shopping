import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addtoCart = adding => {
    cart.includes(adding)
      ? changeQuantity(adding)
      : setCart(oldArray => [...oldArray, adding]);
  };

  const cartQuantity = () => {
    return cart.reduce((total, cart) => cart.quantity + total, 0);
  };

  const changeQuantity = adding => {
    let newCart = [...cart];
    // wont work but how i left it lol
    newCart[adding.id - 1].quantity++;

    setCart(newCart);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartQuantity={cartQuantity} />
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
