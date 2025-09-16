import React from 'react';
import ProductList from '../components/ProductList';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; // Import the CSS file for custom styles
import HeroSection from '../components/HeroSection';
const Home = () => {
  return (
    
    <Container fluid className="home-container">
      <HeroSection />
      <h2 className="text-center my-4">Product Listing</h2>
      <Row>
        <Col md={12}>
          <Card className="bg-light shadow-sm">
            <Card.Body>
              <ProductList />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
