import "./App.css";
import Countries from "./Components/Countries/Countries";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Countries></Countries>
      </main>
    </>
  );
}

export default App;
