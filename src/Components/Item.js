import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function Item(props) {
  const location = useLocation();
  const item = location.state;

  console.log(item);

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Carousel className="carousel">
            <Carousel.Item>
              <img
                src="https://i.scdn.co/image/ab6761610000e5eb33639aaeecfcc5ebada97476"
                alt="Band"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://i.scdn.co/image/ab67616d0000b273198542728b101474c4afe0a1"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg={6}>
          {item.tracks.map((tracks, index) => (
            <li key={index}>{tracks}</li>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Item;
