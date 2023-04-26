import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Components/Item";
import { stock } from "./Components/utils/Stock";

function App() {
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState(stock);

  useEffect(() => {}, [cart]);

  const addtoCart = (adding, quantity) => {
    console.log("Adding to cart");
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

  const addProduct = (id, e, quantity) => {
    const currentProduct = products.find(products => products.id === id);

    addtoCart(currentProduct, quantity);
  };

  return (
    <div className="App">
      <HashRouter>
        <Navbar
          cartQuantity={cartQuantity}
          cart={cart}
          removeFromBasket={removeFromBasket}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Shop"
            element={
              <Shop
                cart={cart}
                products={products}
                addProduct={addProduct}
                addtoCart={addtoCart}
              />
            }
          />
          <Route
            path="/Shop/:id"
            element={<Item addProduct={addProduct} products={products} />}
          ></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
