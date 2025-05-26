import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h1>Click Counter</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>Click Me</button>
      <p>Count: {count}</p>
      <p>Hello, {name}</p>
    </div>
  );
}

export default App;

