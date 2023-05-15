import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

function Item(props) {
  const { addProduct, products } = props;

  const { id } = useParams();
  const item = products.find(product => product.id === parseInt(id));

  const [value, setValue] = useState(1);

  const increment = e => {
    // change console log to CSS change on input
    value >= 99 ? console.log("nope") : setValue(value + 1);
  };

  const decrement = e => {
    // change console log to CSS change on input
    value <= 1 ? console.log("nope") : setValue(value - 1);
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
              <img src={item.bandImage} alt="Band" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={item.albumImage} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={6}>
          <h3>{item.band}</h3>
          <h2>{item.album}</h2>
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
              className="sqButton test"
              onClick={e => addProduct(item.id, e, value)}
            >
              {" "}
              Add to cart
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Item;
