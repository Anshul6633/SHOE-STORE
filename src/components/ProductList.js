import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const shoes = [
  { id: 1, name: 'Running Shoes', price: 99, image: '/images/running-shoes.jpg' },
  { id: 2, name: 'Casual Sneakers', price: 79, image: '/images/casual-sneakers.jpg' },
  { id: 3, name: 'Leather Boots', price: 129, image: '/images/leather-boots.jpg' },
];

const ProductList = () => {
  return (
    <Container>
      <Row>
        {shoes.map((shoe) => (
          <Col key={shoe.id} sm={12} md={6} lg={4} className="mb-4">
            <ProductCard shoe={shoe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
