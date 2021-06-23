import React from "react";
import Iframe from "react-iframe";
import { Card, Button } from "react-bootstrap";
import { Route, Link } from "react-router-dom";

const Product = ({ product, onClick }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Iframe
        url="https://www.amazon.com"
        onClick={() => alert("you clicked")}
      ></Iframe>
    </Card>
  );
};

export default Product;
