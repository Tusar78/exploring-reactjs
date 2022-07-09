// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="container">
      <div className="card__container">
        {users.map((user) => {
          return <Users key={user.id} name={user.name} website={user.website} ></Users>;
        })}
      </div>
    </div>
  );
}

function Users({name, website}) {
  return (
    <div className="product">
      <h2 className="product__name">{name}</h2>
      <span className="product__price">{website}</span>
    </div>
  );
}

export default App;
