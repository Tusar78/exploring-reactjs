const addToCart = (id) => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // Need more same product to add. 
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getStoredCart = id => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  return shoppingCart;
}

const deleteToCart = (id) => {
  const isShoppingCart = localStorage.getItem("shopping-cart");
  const shoppingCart = JSON.parse(isShoppingCart);
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

export {
  addToCart,
  getStoredCart,
  deleteToCart
};

