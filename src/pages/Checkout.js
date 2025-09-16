import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCart } from '../CartContext';
import './Checkout.css'; // Import custom CSS

const Checkout = () => {
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="checkout-container">
      <h3>Checkout</h3>
      <p>Total: ${totalPrice.toFixed(2)}</p>

      <Form className="checkout-form">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Place Order
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
