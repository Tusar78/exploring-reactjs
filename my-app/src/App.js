import "./App.css";
import Countries from "./Components/Countries/Countries";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <MyComponent.DatePicker color="blue"/>
        <Countries></Countries>
      </main>
    </>
  );
}

const MyComponent = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} color here!</div>
  }
}

export default App;
