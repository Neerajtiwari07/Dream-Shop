import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useCart } from '../CartContext';
import './ProductDetail.css'; // Import the custom CSS
const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { addToCart } = useCart(); // Access cart context
  
  // Convert the id to a number since product ids are numbers in the data
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found!</p>;

  return (
    <Container style={{ padding: '20px' }}>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} alt={product.name} />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Price: ${product.price}</h4>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
