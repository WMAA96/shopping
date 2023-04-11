import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Productcard(props) {
  const { product, addProduct } = props;

  const [value, setValue] = useState(0);

  const handleChange = e => {
    const value = Math.max(1, Math.min(99, Number(e.target.value)));
    setValue(value);
  };

  return (
    <Card border="primary">
      <div className="card">
        <Card.Img /*variant="top" src="holder.js/100px180"*/ />
        <Card.Title>{product.band}</Card.Title>
        <Card.Text> Price: £{product.price}</Card.Text>
        <div>
          <Button>+</Button>
          <input
            key={product.id}
            type="number"
            min="1"
            max="99"
            value={value}
            onChange={handleChange}
          />
          <Button>-</Button>
        </div>
        <Button variant="dark" onClick={e => addProduct(product.id, e)}>
          {" "}
          Add to cart
        </Button>
      </div>
      <br />
    </Card>
  );
}

export default Productcard;
