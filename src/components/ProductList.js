import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../data/products';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={3}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
