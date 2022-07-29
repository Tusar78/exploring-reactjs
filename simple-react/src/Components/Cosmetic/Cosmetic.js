import React from 'react';
import { addToCart, deleteToCart } from '../../utilities/fakeDB';

const Cosmetic = ({cosmetic}) => {
  const { id, name, balance } = cosmetic;
  const addCart = (id) => {
    addToCart(id)
  }
  const deleteCart = id => {
    deleteToCart(id);
  }
  return (
    <div className='cosmetic'>
      <h2 className="cosmetic__title">Name: {name}</h2>
      <p className='cosmetic__price'>Price: ${balance}</p>
      <small className='cosmetic__id'>id: {id}</small>
      <button className="button" onClick={() => addCart(id)}>Add to Cart</button>
      <button className="button" onClick={() => deleteCart(id)}>Delete Cart</button>
    </div>
  );
};

export default Cosmetic;