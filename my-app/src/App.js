import "./App.css";
import Countries from "./Components/Countries/Countries";
import Header from "./Components/Header/Header";
import Steps from "./Components/Steps/Steps";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Steps></Steps>
        <Countries></Countries>
      </main>
    </>
  );
}


export default App;
