import React, { useEffect, useRef } from "react";
import { converter } from "../../utils/unit-converter";

import "./styles.css";

const UnitConverter = ({ category, unit }) => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  // 1GB = 1024 MB
  // 1MB = 1024 KB

  // 1KB = 1 / 1024 MB

  useEffect(() => {
    inputRef1.current.value = "";
    inputRef2.current.value = "";
  });

  const handleConvert = () => {
    const from = inputRef1.current.value;
    const result = converter(category, unit, from);
    inputRef2.current.value = result;
  };

  return (
    <>
      <div className="input-container">
        <input type="text" name="from" ref={inputRef1} />
        <label>=</label>
        <input type="text" name="to" ref={inputRef2} />
      </div>

      <button className="convert-button" onClick={() => handleConvert()}>
        Convert
      </button>
    </>
  );
};

export default UnitConverter;
