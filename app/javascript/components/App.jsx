import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count App</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
