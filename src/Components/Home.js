import { Link } from "react-router-dom";
import background from "./utils/background.jpg";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div className="homeText">
        <h1>Album Shop</h1>
        <Link to="/shop">
          <Button variant="light">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
