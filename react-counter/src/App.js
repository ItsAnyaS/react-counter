
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <button onClick={()=> setCount(prev => prev + 1)}>+</button>
      <button onClick={()=> setCount(prev => prev - 1)}>-</button>
      <button onClick={()=> setCount(prev => prev * prev)}>^2</button>
      <button onClick={()=> setCount(0)}>Set to 0</button>
    </div>
  );
}

export default App;
