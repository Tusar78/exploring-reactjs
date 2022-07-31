import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])

  const handleClick = card => {
    console.log(card);
  }

  return (
    <section className='product__container container'>
      {
        guns.map(gun => {
          return <Product key={gun.id} data={gun} handleClick={handleClick} />
        })
      }
      
    </section>
  );
};

export default Products;