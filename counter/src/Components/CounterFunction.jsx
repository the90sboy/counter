import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div className="App">
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    );
  }
  
  export default Counter