import React from 'react';

const Country = ({country}) => {
  const {name: {common} = {}, population} = country;
  return (
    <div className='product'>
      <h2 className='product__name'>{common}</h2>
      <span className='product__price'>Population: {population}</span>
    </div>
  );
};

export default Country;