import React, { useEffect, useState } from 'react';
import type { Product } from '../types/Product';
import Card from '../components/Card';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';
import './Home.css';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price);

  return (
    <div>
      <h2>Product Catalog</h2>
      <div style={{ marginBottom: 16 }}>
        <label>
          Filter by category:
          <select value={category} onChange={e => setCategory(e.target.value)} style={{ marginLeft: 8 }}>
            <option value="all">All</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <label style={{ marginLeft: 16 }}>
          Sort by price:
          <select value={sort} onChange={e => setSort(e.target.value as 'asc' | 'desc')} style={{ marginLeft: 8 }}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      {loading && <div>Loading...</div>}
      {error && (
        <div style={{ color: 'red' }}>
          {error}
          <button onClick={() => window.location.reload()} style={{ marginLeft: 8 }}>
            Retry
          </button>
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {filtered.map(product => (
          <Card key={product.id}>
            <img src={product.image} alt={product.title} style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'contain' }} />
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home; 