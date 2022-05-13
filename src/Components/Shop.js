import { useState, useEffect } from "react";
import Card from "./Card";
function Shop(props) {
  const { addtoCart } = props;
  const [products, setProducts] = useState([
    {
      id: 1,
      price: 15,
      band: "blink182",
      album: "Untitled",
      quantity: 1,
    },
    {
      id: 2,
      price: 10,
      band: "yellowcard",
      album: "ocean avenue",
      quantity: 1,
    },
    {
      id: 3,
      price: 20,
      band: "Green day",
      album: "Dookie",
      quantity: 1,
    },
  ]);

  const addProduct = (id, e) => {
    const currentProduct = products.find(products => products.id === id);

    addtoCart(currentProduct);
  };

  return (
    <div>
      <Card products={products} addProduct={addProduct} />
    </div>
  );
}

export default Shop;
