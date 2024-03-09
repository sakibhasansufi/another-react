import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'

function App() {
  const [count, setCount] = useState(0)
  function handleCLick (){
    alert('button clicked')
  }


  const addNumbers = (num) => alert(num+2);
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <button onClick={handleCLick}>Click me</button>
      <button onClick={() => addNumbers(3)}>lol</button>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
      <Friends></Friends>
    </>
  )
}

export default App
