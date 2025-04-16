import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting name="Kingsley"></Greeting>
      <p>Testing Children</p>
      <p>Testing Children</p>
    </>
  )
}

export default App
