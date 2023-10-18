
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [inputNum, setInputNum] = useState()

  const handleChange = (e) => {
    let input = parseInt(e.target.value)
    if (input){
      setInputNum(input)
    } else {
      return 
    }
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setCount(inputNum)
  }
  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <button onClick={()=> setCount(prev => prev + 1)}>+</button>
      <button onClick={()=> setCount(prev => prev - 1)}>-</button>
      <button onClick={()=> setCount(prev => prev * prev)}>^2</button>
      <button onClick={()=> setCount(0)}>Set to 0</button>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <input type="text" placeholder='Number to change to' />
        <button>Change</button>
      </form>
    </div>
  );
}

export default App;
