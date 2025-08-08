import { useState } from "react";

function ColorGame() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };

  const colors = ["pink", "purple", "plum", "orange"];
  const [colorlist, setcolorlist] = useState(colors);
  return (
    <div>
      {/* Task 2.2 - Update the background the input */}
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        type="text"
      />
      {/* Task 3.2 - Uses colors - Display Color Box */}
      <button onClick={() => setcolorlist(colorlist.concat(color))}>
        ➕ Add
      </button>

      {/* <button onClick={()=>}></button> */}

      {/* Task 3.1 - Uses colors - Display Color Box */}
      {colorlist.map((color) => (
        <ColorBox color={color} />
      ))}
    </div>
  );
}
function ColorBox({ color }) {
  const boxStyles = {
    background: color,
    height: "25px",
    width: "225px",
    marginTop: "8px",
  };

  return <div style={boxStyles}></div>;
}

export { ColorGame };
