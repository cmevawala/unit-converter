import { useState } from "react";
import UnitConverter from "./components/UnitConverter";
import "./App.css";

function App() {
  const [category, setCategory] = useState("DigitalStorage");

  const [units, setUnits] = useState("*");
  console.log(units);

  return (
    <div className="App">
      <section>
        <select
          className="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="DigitalStorage">Digital Storage</option>
          <option value="Area">Area</option>
        </select>

        <br />

        <select value={units} onChange={(e) => setUnits(e.target.value)}>
          <option value="*">GB - MB</option>
          <option value="*">MB - KB</option>
          <option value="/">MB - GB</option>
          <option value="/">KB - MB</option>
        </select>

        <br />

        <UnitConverter category={category} unit={units} />
      </section>
    </div>
  );
}

export default App;
