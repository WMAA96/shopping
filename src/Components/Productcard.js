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
    <Card border="primary">
      <div className="card">
        <Card.Img /*variant="top" src="holder.js/100px180"*/ />
        <Link to={`/Shop/${product.id}`} state={product}>
          <Card.Title>{product.band}</Card.Title>
        </Link>
        <Card.Text> Price: £{product.price}</Card.Text>
        <div>
          <Button onClick={increment}>+</Button>
          <input
            key={product.id}
            type="number"
            min="1"
            max="99"
            value={value}
            onChange={handleChange}
          />
          <Button onClick={decrement}>-</Button>
        </div>
        <Button variant="dark" onClick={e => addProduct(product.id, e, value)}>
          {" "}
          Add to cart
        </Button>
      </div>
      <br />
    </Card>
  );
}

export default Productcard;
