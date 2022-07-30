import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('fakeData/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <>
      <section className='product-store'>
        <div className="product">
          <h2>{products.length}</h2>
        </div>
        <div className="cart">
          <h2>This is cart</h2>
        </div>
      </section> 
    </>
  );
};

export default Shop;