// import { useState } from 'react'
import './App.css'
import { Stars } from './components/stars/stars'


function App() {
  // const [count, setCount] = useState(1)
  let count = 0

  return (
    <>
      <Stars count = {count}></Stars>
    </>
  )
}

export default App
