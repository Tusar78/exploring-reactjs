import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <>
      <section className="product-store">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <h4 className="cart__title">Order Summery</h4>
          <div className="cart__info">
            <p>Selected item: </p>
            <p>Total price: </p>
            <p>Total shipping Charge: </p>
            <p>Tax: </p>
            <h5 className="cart__total">Grand total: </h5>
          </div>
          <div className="cart__buttons">
            <button className="cart__btn cart__btn--red">
              Clear Cart
              <i className="uil uil-trash cart__btn-icon"></i>
            </button>
            <button className="cart__btn cart__btn--yellow">
              Clear Cart
              <i className="uil uil-arrow-right cart__btn-icon"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
