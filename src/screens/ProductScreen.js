import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((i) => i._id === match.params.id);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            url="https://www.amazon.com"
          />
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};

export default ProductScreen;
