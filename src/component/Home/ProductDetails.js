import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Rating from "../Rating";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/cartSlice";
import "../style.css";
import { data } from "../../product";
const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    // Find product details based on productId
    const fetchProductDetails = () => {
      const productData = data.product.find((prod) => prod.id === parseInt(productId));
      setProduct(productData);
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = (prod) => {
    console.log("Adding to cart:", product);
    dispatch(add(prod));
  };

  const removeCart = (prod) => {
    dispatch(remove(prod));
  };

  const isProductInCart = cart.find((item) => item.id === product.id);

  return (
    <Container style={{ paddingTop: "100px" }} className="productcontainer">
      <div className="products productdetails">
        <Card>
          <Row>
            <Col sm={12} md={6}>
              <Card.Img
                variant="top"
                src={product.image || ""}
                alt={product.name}
              />
            </Col>
            <Col sm={12} md={6}>
              <div className="cardbody">
                <Card.Body>
                  <Col sm={12} md={6}>
                    <Card.Title>{product.name}</Card.Title>
                  </Col>
                  <Col sm={12} md={6}>
                    <span>₹ {product.price}</span>
                  </Col>
                  <Col sm={12} md={6}>
                    {product.fastdelivery ? (
                      <div>Fast Delivery</div>
                    ) : (
                      <div>4 days delivery</div>
                    )}
                  </Col>
                  <Col sm={12} md={6}>
                    <div style={{ paddingBottom: "10px" }}>
                      <Rating rating={product.ratings} />
                    </div>
                  </Col>
                  <Col sm={12} md={6}>
                    {isProductInCart ? (
                      <Button
                        variant="danger"
                        onClick={() => removeCart(product.id)}
                      >
                        Remove from cart
                      </Button>
                    ) : (
                      <Button
                        disabled={!product.inStock}
                        onClick={() => addToCart(product)}
                      >
                        {!product.inStock ? "Out of Stock" : "Add to cart"}
                      </Button>
                    )}
                  </Col>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
      {/* <SingleProdect/> */}
    </Container>
  );
};

export default ProductDetails;
