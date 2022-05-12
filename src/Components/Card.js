function Card(props) {
  const { products, addProduct } = props;
  return (
    <div className="product">
      {products.map(products => {
        return [
          <div className="card" key={products.id}>
            <h1>{products.band}</h1>
            <p> Price: £{products.price}</p>
            <button onClick={e => addProduct(products.id, e)}>
              {" "}
              Add to cart
            </button>
          </div>,
        ];
      })}
    </div>
  );
}

export default Card;
