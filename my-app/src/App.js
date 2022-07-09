// import logo from './logo.svg';
// import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Canon EOS 6D Mark",
      price: "115,000৳",
      img: "https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/eos-6d-mark-ii%20/eos-6d-mark-ii-01-500x500.jpg"
    },
  
    {
      id: 2,
      name: "HP 15s-du1087TU",
      price: "35,500৳",
      img: "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-du1087tu/15s-du1087tu-01-500x500.jpg"
    },
  
    {
      id: 3,
      name: "Havit 2218D 3.5mm",
      price: "580৳",
      img: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h2218d/h2218d-500x500.jpg"
    },
  
    {
      id: 4,
      name: "Realme DIZO Watch",
      price: "3,990৳",
      img: "https://www.startech.com.bd/image/cache/catalog/smart-watch/realme/dizo-watch-2/dizo-watch-2-pink-01-500x500.jpg"
    }
  ]
  return (
    <div className="container">
      <div className="card__container">
        {
          products.map(product => {
            return <Products key={product.id} name={product.name} price={product.price} img={product.img}></Products>
          })
        }
      </div>
    </div>
  );
}

// Similar in look but different in data
function Products({name, price, img}) {
  return (
    <div className="product">
      <img src={img} alt={name} className="product__img" />
      <h2 className="prduct__name">{name}</h2>
      <span className="product__price">{price}</span>
    </div>
  )
}

export default App;
