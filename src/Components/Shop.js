import { useState } from "react";
import Productcard from "./Productcard";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Shop(props) {
  const { products, addProduct } = props;
  const [priceRange, setPriceRange] = useState(25);

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <Container id="shopContainer">
      <Row>
        <Col>
          <Sidebar
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            products={products}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
          />
        </Col>
        <Col lg={10}>
          <Row>
            {filteredProducts.map(product => (
              <Col lg="3" md="6" sm="6" xs="9" key={product.id}>
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
