import React from 'react';

const Country = ({name, population}) => {
  return (
    <div className='product'>
      <h2 className='product__name'>{name}</h2>
      <span className='product__price'>Population: {population}</span>
    </div>
  );
};

export default Country;