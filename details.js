import React, { useState } from 'react';

const ProductDetail = () => {
  const [product] = useState({
    id: 1,
    name: 'Product 1',
    price: 10,
    description: 'Description of Product 1',
    image: 'https://via.placeholder.com/150',
  });

  const handleAddToCart = () => {
    alert(Added ${product.name} to cart!);
    // You can implement cart functionality here
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '100%', marginBottom: '10px' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;