import Rice from "./components/rice";
import Protein from "./components/protein";
import Vegetable from "./components/vegetable";
import Dressing from "./components/dressing";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bento Boxes</h1>
      <p>My bento box contains:</p>
      <Rice type="basmati" />
      <Rice type="brown" />
      <Protein type="chicken" />
      <Vegetable type={["lettuce", "onion", "edamame"]} />
      <Dressing />
      <p>And I love it!</p>
    </div>
  );
}

export default App;
