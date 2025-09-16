import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css'; // Import custom CSS for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to DreamShop</h1>
            <p>Your one-stop destination for the best products at unbeatable prices!</p>
            <Button variant="primary" href="/">Shop Now</Button>
          </Col>
          <Col md={6}>
            <img
              src="https://img.freepik.com/free-photo/view-table-with-articles-food-family_1398-5025.jpg?semt=ais_hybrid" // Replace with your desired image
              alt="Shopping"
              className="hero-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
