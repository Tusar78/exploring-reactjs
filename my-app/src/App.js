import logo from './logo.svg';
import './App.css';

const person = {
  name: 'Tusar',
  age: 23
}

const card = {
  width: '18rem',
  backgroundColor: 'white',
  boxShadow: '0px 4px 10px rgba(0,0,0,.15)',
  borderRadius: '.25rem',
  color: '#000',
  textAlign: 'left',
  padding: '1rem'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div style={card}>
            <h2 style={{padding: '0', margin: '0'}}>Card title</h2>
            <span>Card subtitle</span>
            <button style={{display: 'block'}}>Click me</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
