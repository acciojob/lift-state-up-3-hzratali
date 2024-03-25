import React, { useState } from "react";
import "./../styles/App.css";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const App = () => {
  let [selected, setSelected] = useState("");
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildOne change={setSelected} />
      <ChildTwo change={setSelected} />
      <p className="selected">Selected Option: {selected}</p>
    </div>
  );
};

export default App;
