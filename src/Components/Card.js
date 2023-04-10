import Button from "react-bootstrap/Button";

function Card(props) {
  const { products, addProduct } = props;
  return (
    <div className="product">
      {products.map(products => {
        return [
          <div className="card" key={products.id}>
            <h1>{products.band}</h1>
            <p> Price: £{products.price}</p>
            <Button variant="dark" onClick={e => addProduct(products.id, e)}>
              {" "}
              Add to cart
            </Button>
          </div>,
        ];
      })}
    </div>
  );
}

export default Card;
