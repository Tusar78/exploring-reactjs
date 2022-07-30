import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const quantity = cart.reduce((prev, curr) => {
    return prev + curr.quantity
  }, 0)

  const price = cart.reduce((prev, curr) => {
    if (curr.quantity) {
      return prev + curr.price * curr.quantity;
    }
    return prev + curr.price;
  }, 0);

  const shipping = cart.reduce((prev, curr) => {
    return prev + curr.shipping;
  }, 0);


  // 3 percentage tax
  const newTax = ((price + shipping) * .03).toFixed(2);
  const numTax = parseFloat(newTax);

  const grandTotal = price + shipping + numTax; 

  return (
    <div className="cart">
      <h4 className="cart__title">Order Summery</h4>
      <div className="cart__info">
        <p>Selected item: {quantity}</p>
        <p>Total price: ${price}</p>
        <p>Total shipping Charge: ${shipping}</p>
        <p>Tax: ${numTax}</p>
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
