import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
function BasketOffCanvas(props) {
  const { show, onHide, cart, removeFromBasket, setList, list } = props;
  return (
    <Offcanvas placement="end" show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Basket:</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul>
          {cart.map(({ id, album, quantity, price, band, albumImage }) => (
            <li key={id}>
              <div className="basketItems">
                <div className="basketImg">
                  <img src={albumImage} height="100px" alt="Album" />
                </div>
                <div className="basketDetails">
                  <ul>
                    <li>{album}</li>

                    <li>Quantity: {quantity}</li>
                    <li>Price: £{quantity * price}</li>
                  </ul>
                </div>
                <div className="basketDelete">
                  <Button
                    onClick={e => {
                      removeFromBasket({ id }, e);
                      setList(false);
                      console.log(list);
                    }}
                  >
                    <span>X</span>
                  </Button>
                </div>
              </div>

              <hr />
            </li>
          ))}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default BasketOffCanvas;
