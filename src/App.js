import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import UnitConverter from "./UnitConverter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Length");

  return (
    <div className="App">
      <h1>Unit Converter</h1>
      <div className="main-container">
        <LeftContainer
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <UnitConverter category={selectedCategory} />
      </div>
    </div>
  );
}

export default App;
