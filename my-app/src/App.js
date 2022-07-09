// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  // const employee = [
  //   {name: 'Tusar', role: 'Frontend developer'},
  //   {name: 'Rakib', role: 'IT-Officer'},
  //   {name: 'Sharif', role: 'Businessman'}
  // ]

  // const products = [
  //   {
  //     id: 1,
  //     name: "Canon EOS 6D Mark",
  //     price: "115,000৳",
  //     img: "https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/eos-6d-mark-ii%20/eos-6d-mark-ii-01-500x500.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "HP 15s-du1087TU",
  //     price: "35,500৳",
  //     img: "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-du1087tu/15s-du1087tu-01-500x500.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Havit 2218D 3.5mm",
  //     price: "580৳",
  //     img: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h2218d/h2218d-500x500.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Realme DIZO Watch",
  //     price: "3,990৳",
  //     img: "https://www.startech.com.bd/image/cache/catalog/smart-watch/realme/dizo-watch-2/dizo-watch-2-pink-01-500x500.jpg",
  //   },
  // ];

  return (
    <div className="container">
      <div className="card__container">
        <Counter></Counter>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(5);
  const increasedCount = () => setCount(count + 1);
  const decreasedCount = () => setCount(count - 1);

  return (
    <div className="product">
      <h2>Count: {count}</h2>
      <button className="btn" onClick={increasedCount}>Increased</button>
      <button className="btn" onClick={decreasedCount}>Decreased</button>
    </div>
  );
}

// function Person({name, role}) {
//   return (
//     <div className="person">
//       <img className="person__img" src={logo} alt="person-img" />
//       <h2 className="person__title">I'm {name}</h2>
//       <span className="person__role">{role}</span>
//     </div>
//   )
// }

// function Product({ name, price, img }) {
//   return (
//     <div className="product">
//       <img src={img} alt={name} className="product__img" />
//       <h2 className="product__name">{name}</h2>
//       <p className="product__price">Price: {price}</p>
//     </div>
//   );
// }

export default App;
