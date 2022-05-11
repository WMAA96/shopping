function Card(props) {
  const { products } = props;
  return (
    <div className="product">
      {products.map(products => {
        return [
          <div className="card">
            <h1 key={products.id}>{products.band}</h1>
            <p> Price: £{products.price}</p>
          </div>,
        ];
      })}
    </div>
  );
}

export default Card;
