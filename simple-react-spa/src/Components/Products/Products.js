import React, { useEffect, useState } from 'react';

const Products = () => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])
  
  return (
    <section className='product__container'>
      
    </section>
  );
};

export default Products;