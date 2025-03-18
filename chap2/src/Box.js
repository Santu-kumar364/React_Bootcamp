import React, { useState } from "react";

const Box = () => {
  const [colour, setColor] = useState(null);

  const colorPicker = (santu) => {
    setColor(santu.target.value); 
};

  return (
    <main>
      <div className="box" style={{ backgroundColor: colour || "white" }}>
        {colour ? '' : "Empty Value"}
      </div>
      <input role="text" placeholder="Add color name" onChange={colorPicker} />
    </main>
  );
};

export default Box;


