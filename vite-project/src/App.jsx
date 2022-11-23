import { useEffect, useState } from "react";
import UnitConverter from "./components/UnitConverter";
import "./App.css";

import { config } from "./data/config";

function App() {
  const [category, setCategory] = useState("storage");

  const [unit, setUnit] = useState(0);

  useEffect(() => {
    setUnit(0);
  }, [category]);

  return (
    <div className="App">
      <section>
        <select
          className="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {config &&
            Object.keys(config).map((key) => {
              return <option value={key}>{config[key].label}</option>;
            })}
        </select>

        <br />

        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          {config &&
            config[category] &&
            config[category].units &&
            config[category].units.length > 0 &&
            config[category].units.map((unitConfig, index) => {
              return (
                <option key={index} value={index}>
                  {unitConfig.label}
                </option>
              );
            })}
        </select>

        <br />

        <UnitConverter category={category} unit={unit} />
      </section>
    </div>
  );
}

export default App;
