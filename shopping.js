import React, { useState } from 'react';
const SupermarketProductListingPage = () => {
  const mockProducts = [
    { id: 1, name: 'Apple', price: 1.99, description: 'Fresh juicy apple', image: https;https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfnzPITM36h03e2AFLwOD_uVtfbtktDfaojvOpBAW-ZzHhhWRFEvsp5vU7SxAjUvan0oK2PnweI6ITSWaB90ru1NapMiQfMeXFTfHho3KBZcoZZMLdT__2xMg}',
    { id: 2, name: 'Banana', price: 0.99, description: 'Ripe banana', image: 'https://example.com/images/banana.jpg' },
    { id: 3, name: 'Orange', price: 2.49, description: 'Sweet orange', image: 'https://example.com/images/orange.jpg' },
    { id: 4, name: 'Mango', price: 3.99, description: 'Tropical mango', image: 'https://example.com/images/mango.jpg' },
    { id: 5, name: 'Strawberry', price: 4.49, description: 'Fresh strawberry', image: 'https://example.com/images/strawberry.jpg' },
    { id: 6, name: 'Blueberry', price: 2.99, description: 'Juicy blueberry', image: 'https://example.com/images/blueberry.jpg' },
    { id: 7, name: 'Grapes', price: 5.99, description: 'Seedless grapes', image: 'https://example.com/images/grapes.jpg' },
    { id: 8, name: 'Watermelon', price: 6.99, description: 'Sweet watermelon', image: 'https://example.com/images/watermelon.jpg' },
    { id: 9, name: 'Pineapple', price: 3.49, description: 'Tropical pineapple', image: 'https://example.com/images/pineapple.jpg' },
    { id: 10, name: 'Kiwi', price: 1.79, description: 'Green kiwi fruit', image: 'https://example.com/images/kiwi.jpg' },
    { id: 11, name: 'Peach', price: 2.69, description: 'Juicy peach', image: 'https://example.com/images/peach.jpg' },
    { id: 12, name: 'Plum', price: 1.49, description: 'Sweet plum', image: 'https://example.com/images/plum.jpg' },
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; 
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = mockProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="supermarket-product-listing">
      <h1>Supermarket Product Listing</h1>
      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(mockProducts.length / productsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SupermarketProductListingPage;