import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useCart } from '../CartContext';
import './CartPage.css'; // Import custom CSS

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        <>
          <ListGroup className="cart-list">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="cart-item">
                {item.name} - ${item.price.toFixed(2)}
                <Button
                  variant="danger"
                  size="sm"
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4 className="total-price">Total: ${totalPrice.toFixed(2)}</h4>
          <Button variant="warning" className="clear-cart" onClick={clearCart}>
            Clear Cart
          </Button>
        </>
      )}
    </div>
  );
};

export default CartPage;
