import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <h1>React Counter Application</h1>
      <h1 id="total">{count}</h1>
      <div class="Card">
        <button onClick={() => setCount(count + 1)} class="b1"><b>Increment (+)</b></button>
        <button onClick={() => setCount(count - 1)} class="b1"><b>Decrement (-)</b></button>
      </div>
      <div class="Card">
        <button onClick={() => setCount(0)} class="b1" id="b3"><b>Reset</b></button>
      </div>
      </body>
    </>
  )
}


export default App
