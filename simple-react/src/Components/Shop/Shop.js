import React, { useEffect, useState } from "react";
import { addToCart, getStoredCart } from "../../utilities/fakeDB";
import Cart from "../Cart/Cart";
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
    addToCart(product.id);
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      console.log(addedProduct);
    }
  }, [products]);

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
          <Cart cart={cart} />
        </div>
      </section>
    </>
  );
};

export default Shop;
