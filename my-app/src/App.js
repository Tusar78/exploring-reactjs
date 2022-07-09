import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="card__container">
        <Person name="Tusar" rol="Professional Web developer"></Person>
        <Person name="Rakibul Islam" rol="IT-Officer"></Person>
        <Person name="Sharif" rol="Business man"></Person>
      </div>
    </div>
  );
}

function Person({name, rol}) {
  return (
    <div className="person">
      <img className="person__img" src={logo} alt="person-img" />
      <h2 className="person__title">I'm {name}</h2>
      <span className="person__role">{rol}</span>
    </div>
  )
}

export default App;
