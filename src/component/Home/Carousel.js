import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function DarkVariantExample() {
  const carouselProducts = useSelector(state => state.products);

  return (
    <Carousel data-bs-theme="dark">
      {carouselProducts.map((prod, index) => (
        <Carousel.Item key={index} style={{ height: 'auto', backgroundColor: '#000' }}>
          <img
            className="d-block w-100 banner-img"
            src={prod.image}
            alt="Product Image"
          />
          <Row className='carousel-cap'>
            <Col sm={6} className='banner-txt'>
              <h3>{prod.title}</h3>
              <h1>{prod.description}</h1>
              <Link to="/shop"><Button className='banner-btn'>SHOP NOW</Button></Link>
            </Col>
          </Row>
          <Carousel.Caption>
            <h5></h5>
            <p style={{ color: '#fff' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DarkVariantExample;
