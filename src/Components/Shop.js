import { useState, useEffect } from "react";
import Card from "./Productcard";
import Productcard from "./Productcard";
import Sidebar from "./Sidebar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Shop(props) {
  const { addtoCart, products, addProduct } = props;
  const [priceRange, setPriceRange] = useState(50);

  const [filteredProducts, setFilteredProducts] = useState(products);

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
              <Col lg="4" xs="1" key={product.id}>
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
