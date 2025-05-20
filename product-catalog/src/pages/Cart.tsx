import React from 'react';
import { useCart } from '../context/CartContext';
import Table from '../components/Table';
import Button from '../components/Button';

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', fontSize: 18 }}>Your cart is empty.</div>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button onClick={() => addToCart(item)} style={{ background: '#4caf50', color: '#fff' }}>+</Button>
                    <Button onClick={() => removeFromCart(item.id)} style={{ background: '#f44336', color: '#fff' }}>-</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={{ marginTop: 24, textAlign: 'right', fontSize: 20 }}>
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Button onClick={clearCart} style={{ marginTop: 16, background: '#e74c3c', color: '#fff' }}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 