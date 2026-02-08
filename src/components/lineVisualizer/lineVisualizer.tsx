import React, { useState } from "react";
import "./lineVisualizer.scss"
import logo from "../../assets/icons/logo.png";

export type ColorOption = "blue" | "green" | "red" | "yellow";

const LineVisualizer: React.FC = () => {
  const [color, setColor] = useState<ColorOption>("blue");
  const [totalLines, setTotalLines] = useState<number>(5);
  const [itemsPerLine, setItemsPerLine] = useState<number>(2);

  return (
    <div className="container">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <select
        value={color}
        onChange={(e) => setColor(e.target.value as ColorOption)}
      >
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
      </select>

      <label>Total Lines</label>
      <input
        type="number"
        min={1}
        value={totalLines}
        onChange={(e) => setTotalLines(Number(e.target.value))}
      />

      <label>Items in Line</label>
      <input
        type="number"
        min={1}
        value={itemsPerLine}
        onChange={(e) => setItemsPerLine(Number(e.target.value))}
      />

      <div className="lines">
        <h1>
          Hi Rucha Nutyalwar
        </h1>
        {Array.from({ length: totalLines }).map((_, lineIndex) => (
          <div key={lineIndex} className="line">
            {Array.from({ length: itemsPerLine }).map((_, itemIndex) => (
              <div key={itemIndex} className={`item ${color}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineVisualizer;
