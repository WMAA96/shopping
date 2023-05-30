import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function Item(props) {
  const { addProduct, products } = props;

  const [adding, setAdding] = useState(false);

  const { id } = useParams();
  const item = products.find(product => product.id === parseInt(id));

  const [value, setValue] = useState(1);

  const handleClick = e => {
    setAdding(true);

    setTimeout(() => {
      setAdding(false);
      addProduct(item.id, e, value);
    }, 250);
  };

  const increment = e => {
    if (value < 99) {
      setValue(value + 1);
    }
  };

  const decrement = e => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleChange = e => {
    const value = Math.max(1, Math.min(99, Number(e.target.value)));
    setValue(value);
  };

  return (
    <Container id="itemContainer">
      <Row>
        <Col lg={6}>
          <Carousel className="carousel">
            <Carousel.Item>
              <img src={item.bandImage} className="carouselImage" alt="Band" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={item.albumImage}
                className="carouselImage"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={6}>
          <h3>{item.band}</h3>
          <h1>{item.album}</h1>

          <h2>£{item.price}</h2>
          <p>{item.about}</p>
          <hr></hr>
          <div className="tracks">
            <ul>
              Track list:
              {item.tracks.map((tracks, index) => (
                <li key={index}>{tracks}</li>
              ))}
            </ul>
            <hr></hr>
            <div className="itemAddToCartArea">
              <button className="sqButton" onClick={increment}>
                +
              </button>
              <input
                className="itemQuantityInput"
                key={item.id}
                type="number"
                min="1"
                max="99"
                value={value}
                onChange={handleChange}
              />
              <button onClick={decrement} className="sqButton">
                -
              </button>
              <button
                className="sqButton itemAddToCartButton"
                onClick={handleClick}
                disabled={adding}
              >
                {adding ? (
                  <Spinner animation="border" role="status" size="sm">
                    <span className="visually-hidden"></span>
                  </Spinner>
                ) : (
                  "Add to cart"
                )}
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Item;
