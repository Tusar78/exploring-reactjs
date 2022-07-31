import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  const handleClick = (card) => {
    const newCart = [...cart, card];
    setCart(newCart);
  };

  return (
    <>
      {
        cart.map(ct => <h2>{ct.name}</h2>)
      }
      <section className="product__container container">
        {guns.map((gun) => {
          return <Product key={gun.id} data={gun} handleClick={handleClick} />;
        })}
      </section>
    </>
  );
};

export default Products;
