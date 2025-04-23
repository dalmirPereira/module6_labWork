import './App.css'
import Greeting from './components/Greeting'
import Exercises from './components/Exercises'
import BigCats from './components/BigCats'
import Emoji from './components/Emoji'

function App() {

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

      <div className="exerciseBox">
        <Exercises name="Exercise 3"></Exercises>
        <Emoji></Emoji>
      </div>
    </>
  )
}

export default App
