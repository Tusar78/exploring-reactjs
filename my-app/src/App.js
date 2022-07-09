import logo from './logo.svg';
import './App.css';

function App() {
  // const employee = {
  //   empOne: {name: 'Tusar', role: 'Frontend developer'},
  //   empTwo: {name: 'Rakib', role: 'IT-Officer'},
  //   empThree: {name: 'Sharif', role: 'Businessman'},
  // }
  const employee = ['Mastura', 'Borsha', 'Rumi', 'Sabrina', 'Munjila', 'Tusar'];
  return (
    <div className="container">
      <div className="card__container">
        {
          employee.map(emp => {
            return <Person key={emp} name={emp}></Person>
          })
        }
        {/* <Person name={employee.empOne.name} rol={employee.empOne.role}></Person>
        <Person name={employee.empTwo.name} rol={employee.empTwo.role}></Person>
        <Person name={employee.empThree.name} rol={employee.empThree.role}></Person> */}
        
      </div>
    </div>
  );
}

function Person({name}) {
  return (
    <div className="person">
      <img className="person__img" src={logo} alt="person-img" />
      <h2 className="person__title">I'm {name}</h2>
      {/* <span className="person__role">{rol}</span> */}
    </div>
  )
}

export default App;
