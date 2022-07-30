import React from "react";
import './Cart.css'

const Cart = () => {
  return (
    <>
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
    </>
  );
};

export default Cart;
