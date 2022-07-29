import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch('https://cosmetics.free.beeceptor.com')
      .then(res => res.json())
      .then(data => setCosmetics(data));
  }, []) 
  return (
    <div className='product__container'>
      {
        cosmetics.map(cosmetic => {
          return <Cosmetic key={cosmetic.id} cosmetic={cosmetic} />
        })
      }
    </div>
  );
};

export default Cosmetics;