
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <button onClick={()=> setCount(prev => prev + 1)}>+</button>
    </div>
  );
}

export default App;
