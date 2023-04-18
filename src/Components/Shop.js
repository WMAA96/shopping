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

  // Filter product whenever price range changes -------> PREVIOUS IMPLEMENTATION delete when ready:  notes for next time: Need this since state is async e.g put max price to 19 then 20 green day wont show up
  useEffect(() => {
    const priceFiltered = products.filter(
      products => products.price <= priceRange
    );
    console.log(priceRange);
    setFilteredProducts(priceFiltered);
  }, [priceRange]);

  const addProduct = (id, e, quantity) => {
    const currentProduct = products.find(products => products.id === id);

    addtoCart(currentProduct, quantity);
  };

  const filterBands = selectedBands => {
    const bandFilter = products.filter(product => {
      if (Object.values(selectedBands).every(value => !value)) {
        return true; // Include all products in the filtered array if no band has been checked
      } else if (selectedBands[product.band]) {
        return true;
      } else return false;
    });

    const priceAndBandFilter = bandFilter.filter(
      products => products.price <= priceRange
    );

    setFilteredProducts(priceAndBandFilter);
  };

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Sidebar
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            products={products}
            filterBands={filterBands}
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
