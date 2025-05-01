import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // loading flag

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      } finally {
        setLoading(false); // done loading
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '40px', backgroundColor: '#f7f7f7', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#2c3e50' }}>Produse</h1>

      {loading ? (
        <p style={{ textAlign: 'center', fontSize: '18px' }}>Loading products...</p>
      ) : products.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 10px', color: '#34495e' }}>{product.name}</h3>
                <p style={{ fontSize: '14px', color: '#7f8c8d' }}>{product.description}</p>
                <p style={{ fontWeight: 'bold', marginTop: '10px', color: '#27ae60' }}>{product.price} MDL</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>No products found</p>
      )}
    </div>
  );
};

export default Home;
