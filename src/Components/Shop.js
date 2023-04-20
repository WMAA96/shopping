import { useState, useEffect } from "react";
import Card from "./Productcard";
import Productcard from "./Productcard";
import Sidebar from "./Sidebar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Shop(props) {
  const { addtoCart } = props;
  const [priceRange, setPriceRange] = useState(50);
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
    {
      id: 4,
      price: 20,
      band: "Green day",
      album: "Dookie",
      quantity: 1,
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const addProduct = (id, e, quantity) => {
    const currentProduct = products.find(products => products.id === id);

    addtoCart(currentProduct, quantity);
  };

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Sidebar
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            products={products}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
          />
        </Col>
        <Col xs={9}>
          <Row>
            {filteredProducts.map(product => (
              <Col xs="4" key={product.id}>
                <Productcard product={product} addProduct={addProduct} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
