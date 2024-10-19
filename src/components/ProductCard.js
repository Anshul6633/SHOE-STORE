import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ shoe }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shoe.image} />
      <Card.Body>
        <Card.Title>{shoe.name}</Card.Title>
        <Card.Text>${shoe.price}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
