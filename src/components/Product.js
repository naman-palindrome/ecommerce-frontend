import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text>
            <div className="my-3">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
          </Card.Text>
          <Card.Text>
            <h3>${product.price}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
