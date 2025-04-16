import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Exercises from './components/Exercises'
import BigCats from './components/BigCats'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="exerciseBox">
        <Exercises name="Exercise 1"></Exercises>
        <Greeting name="Kingsley"></Greeting>
        <p>Testing Children</p>
        <p>Testing Children</p>
      </div>

      <div className="exerciseBox">
        <Exercises name="Exercise 2"></Exercises>
        <BigCats></BigCats>
      </div>
    </>
  )
}

export default App
