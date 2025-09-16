import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access cart context

  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/product/${product.id}`}> {/* Correct link to ProductDetail */}
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
