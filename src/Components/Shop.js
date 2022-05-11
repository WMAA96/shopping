import { useState } from "react";
import Card from "./Card";
function Shop() {
  const [products, setProducts] = useState([
    {
      id: 1,
      price: 50,
      band: "blink182",
      album: "Untitled",
    },
    {
      id: 2,
      price: 50,
      band: "yellowcard",
      album: "ocean avenue",
    },
    {
      id: 3,
      price: 50,
      band: "Green day",
      album: "Dookie",
    },
  ]);

  return (
    <div>
      <Card products={products} />
    </div>
  );
}

export default Shop;
