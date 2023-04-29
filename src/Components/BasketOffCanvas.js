import Offcanvas from "react-bootstrap/Offcanvas";

function BasketOffCanvas(props) {
  const { show, onHide, cart, removeFromBasket, setList, list } = props;
  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Basket:</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul>
          {cart.map(({ id, album, quantity, price, band }) => (
            <li key={id}>
              <h3>{band}</h3>
              {album} {quantity} £{quantity * price}{" "}
              <button
                onClick={e => {
                  removeFromBasket({ id }, e);
                  setList(false);
                  console.log(list);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default BasketOffCanvas;
