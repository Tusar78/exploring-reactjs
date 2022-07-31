import React from 'react';

const Product = ({data}) => {
  const { img, action, price} = data;
  return (
    <div className='product'>
      <img src={img} alt={action} className="product__img" />

      <div className="product__details">
        <h3 className="product__title">{action}</h3>
        <p>Price: ${price}</p>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default Product;