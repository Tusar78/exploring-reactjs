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

  
  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart)
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToCart(product.id);
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
          <Cart cart={cart} />
        </div>
      </section>
    </>
  );
};

export default Shop;
