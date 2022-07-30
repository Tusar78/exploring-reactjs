import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const price = cart.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  const shipping = cart.reduce((prev, curr) => {
    return prev + curr.shipping;
  }, 0);

  const tax = cart.reduce((prev, curr) => {
    const newTax = ((curr.price * 3) / 100).toFixed(2);
    const numTax = parseFloat(newTax);
    console.log(numTax);
    return prev + numTax;
  }, 0);

  const grandTotal = price + shipping + tax; 

  return (
    <div className="cart">
      <h4 className="cart__title">Order Summery</h4>
      <div className="cart__info">
        <p>Selected item: {cart.length}</p>
        <p>Total price: ${price}</p>
        <p>Total shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h5 className="cart__total">Grand Total: ${grandTotal}</h5>
      </div>
      <div className="cart__buttons">
        <button className="cart__btn cart__btn--red">
          <span>Clear Cart</span>
          <i className="uil uil-trash cart__btn-icon"></i>
        </button>
        <button className="cart__btn cart__btn--yellow">
          <span>Review Order</span>
          <i className="uil uil-arrow-right cart__btn-icon"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
