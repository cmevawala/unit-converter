import React, { useRef } from "react";
import { converter } from "../../utils/unit-converter";

import "./styles.css";

const UnitConverter = ({ category, unit }) => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  // 1GB = 1024 MB
  // 1MB = 1024 KB

  // 1KB = 1 / 1024 MB

  //

  const handleConvert = () => {
    const from = inputRef1.current.value;

    console.log(unit);

    const result = converter(unit, from);

    inputRef2.current.value = result;
  };

  return (
    <>
      <div className="input-container">
        <input type="text" name="from" ref={inputRef1} />
        <label>=</label>
        <input type="text" name="to" ref={inputRef2} />
      </div>

      {/* <button onClick={() => handleConvert()}> Convert </button> */}
    </>
  );
};

export default UnitConverter;
