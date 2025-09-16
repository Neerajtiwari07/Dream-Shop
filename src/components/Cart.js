import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        <ListGroup>
          {cartItems.map(item => (
            <ListGroup.Item key={item.id}>
              {item.name} - ${item.price}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <h4>Total: ${totalPrice}</h4>
    </div>
  );
};

export default Cart;
