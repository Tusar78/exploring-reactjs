import React from 'react';

const Cosmetic = ({cosmetic}) => {
  const { id, name, balance } = cosmetic;
  const addToCart = (id) => {
    console.log('Button clicked!', id);
  }
  return (
    <div className='cosmetic'>
      <h2 className="cosmetic__title">Name: {name}</h2>
      <p className='cosmetic__price'>Price: {balance}</p>
      <small className='cosmetic__id'>id: {id}</small>
      <button className="button" onClick={addToCart.bind(this, id)}>Add to Cart</button>
      <button className="button">Delete Cart</button>
    </div>
  );
};

export default Cosmetic;