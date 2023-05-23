import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Productcard(props) {
  const { product, addProduct } = props;

  const [value, setValue] = useState(1);

  const handleChange = e => {
    const value = Math.max(1, Math.min(99, Number(e.target.value)));
    setValue(value);
  };

  const increment = e => {
    // change console log to CSS change on input
    value >= 99 ? console.log("nope") : setValue(value + 1);
  };

  const decrement = e => {
    // change console log to CSS change on input
    value <= 1 ? console.log("nope") : setValue(value - 1);
  };

  return (
    <Card>
      <Link to={`/Shop/${product.id}`}>
        <Card.Img variant="top" src={product.albumImage} />
        <Card.Title>{product.album}</Card.Title>
      </Link>
      <Card.Subtitle> {product.band} </Card.Subtitle>
      <Card.Text>£{product.price}</Card.Text>

      <Button variant="dark" onClick={e => addProduct(product.id, e, value)}>
        Quick add
      </Button>
    </Card>
  );
}

export default Productcard;
