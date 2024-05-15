import React from "react";

const LeftContainer = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    "Length",
    "Temperature",
    "Speed",
    "Energy",
    "Area",
    "Angle",
  ];

  return (
    <div className="left-container">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => setSelectedCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftContainer;
