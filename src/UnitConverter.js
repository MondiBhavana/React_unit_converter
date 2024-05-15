import React, { useState, useEffect } from "react";

const UnitConverter = ({ category }) => {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [inputUnit, setInputUnit] = useState("");
  const [outputUnit, setOutputUnit] = useState("");
  const [message, setMessage] = useState("");

  const unitConversions = {
    Length: { cm: 1, in: 2.54, m: 100, ft: 30.48 },
    Temperature: { C: 1, F: "CtoF", K: "CtoK" },
    Speed: { "m/s": 1, "km/h": 3.6, mph: 2.23694 },
    Energy: { J: 1, kJ: 0.001, cal: 0.239006 },
    Area: { "m²": 1, "cm²": 10000, "ft²": 10.7639 },
    Angle: { deg: 1, rad: 0.0174533, grad: 1.11111 },
  };

  useEffect(() => {
    const defaultUnit = Object.keys(unitConversions[category])[0];
    setInputUnit(defaultUnit);
    setOutputUnit(defaultUnit);
    setInput(0);
    setOutput(0);
    setMessage("");
  }, [category]);

  const handleConversion = () => {
    if (isNaN(input) || input < 0) {
      setMessage("Please enter a valid positive number");
      return;
    }

    let outputValue;

    if (category === "Temperature") {
      if (inputUnit === "C" && outputUnit === "F") {
        outputValue = (input * 9) / 5 + 32;
      } else if (inputUnit === "C" && outputUnit === "K") {
        outputValue = parseFloat(input) + 273.15;
      } else if (inputUnit === "F" && outputUnit === "C") {
        outputValue = ((input - 32) * 5) / 9;
      } else if (inputUnit === "F" && outputUnit === "K") {
        outputValue = ((input - 32) * 5) / 9 + 273.15;
      } else if (inputUnit === "K" && outputUnit === "C") {
        outputValue = input - 273.15;
      } else if (inputUnit === "K" && outputUnit === "F") {
        outputValue = ((input - 273.15) * 9) / 5 + 32;
      } else {
        outputValue = input; // same unit
      }
    } else {
      const inputInBase = input * unitConversions[category][inputUnit];
      outputValue = inputInBase / unitConversions[category][outputUnit];
    }

    setOutput(outputValue.toFixed(2));
    setMessage(
      `Converted ${input} ${inputUnit} to ${outputValue.toFixed(
        2
      )} ${outputUnit}`
    );
  };

  return (
    <div className="converter">
      <h2>{category} Converter</h2>
      <div id="box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
        />
        <select
          id="inputUnit"
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}>
          {Object.keys(unitConversions[category]).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <div className="wrapper">
        <input type="text" value={output} readOnly placeholder="Result" />
        <select
          id="outputUnit"
          value={outputUnit}
          onChange={(e) => setOutputUnit(e.target.value)}>
          {Object.keys(unitConversions[category]).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <button id="convertButton" onClick={handleConversion}>
        Convert
      </button>
      <div className="center">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default UnitConverter;
