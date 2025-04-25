import './App.css'
import Greeting from './components/Greeting'
import Exercises from './components/Exercises'
import BigCats from './components/BigCats'
import Emoji from './components/Emoji'
import Calculator from './components/Calculator'

function App() {

  return (
    <>
      <div className="exerciseBox">
        <Exercises name="Exercise 1" />
        <Greeting name="Kingsley" />
        <p>Testing Children</p>
        <p>Testing Children</p>
      </div>

      <div className="exerciseBox">
        <Exercises name="Exercise 2, 4 and 5" />
        <BigCats />
      </div>

      <div className="exerciseBox">
        <Exercises name="Exercise 3" />
        <Emoji />
      </div>

      <div className="exerciseBox">
        <Exercises name="Exercise 6" />
        <Calculator />
      </div>
    </>
  )
}

export default App
