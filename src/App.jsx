import React, { useState } from "react";
import "./App.css";

import Counter from "./components/Counter";
import Posts from "./components/Posts";

function App() {
  const [flip, setFlip] = useState(true);

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <div className="App">
      <p>Redux ToolKit</p>
      <button onClick={handleFlip}>Switch Component</button>
      {flip && <Counter />}
      {!flip && <Posts />}
    </div>
  );
}

export default App;
