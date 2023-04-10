import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard(props) {
  const { products, addProduct } = props;
  return (
    <div className="product">
      {products.map(products => {
        return [
          <Card border="primary">
            <div className="card" key={products.id}>
              <Card.Img /*variant="top" src="holder.js/100px180"*/ />
              <Card.Title>{products.band}</Card.Title>
              <Card.Text> Price: £{products.price}</Card.Text>
              <div>
                <Button>+</Button>
                <label className="quantityLabel">0</label>
                <Button>-</Button>
              </div>
              <Button variant="dark" onClick={e => addProduct(products.id, e)}>
                {" "}
                Add to cart
              </Button>
            </div>
            <br />
          </Card>,
        ];
      })}
    </div>
  );
}

export default ProductCard;
