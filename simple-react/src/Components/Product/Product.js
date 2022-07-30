import React from 'react';
import './Product.css';

const Product = ({product}) => {
  const {img, name, price, seller, rating} = product;
  return (
    <div className='product'>
      <img src={img} alt={name} className='product__img' />

      <div className="product__details">
        <h2 className="product__title">{name}</h2>
        <span className='product__price'>Price: ${price}</span>
        <small className="product__seller">Manufacturer: {seller}</small>
        <small className="product__rating">Rating: {rating} star</small>
      </div>

      <button className="product__btn">
        Add to Cart
        <i class="uil uil-shopping-cart product__btn-icon"></i>  
      </button>
    </div>
  );
};

export default Product;