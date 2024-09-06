import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  const addvalue = () => {
    if(counter < 20) {
      setCounter(counter+1);
    }else {
      alert("Limit reached");
    }
  }

  const removevalue = () => {
    if(counter > 0) {
      setCounter(counter-1);
    }else {
      alert("Limit reached");
    }
  }
  return (
    <>
      <h1>Chai with Gajanan</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <br />
      <button onClick={removevalue}>Remove value</button>
      
    </>
  )
}

export default App
