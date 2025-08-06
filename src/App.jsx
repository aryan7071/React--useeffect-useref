<<<<<<< HEAD
import { useState , useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btnref = useRef()

useEffect(() => {
  console.log(`First rendering`)
  btnref.current.style.backgroundColor = "red"
},[])
=======
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './component/navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setfirst] = useState(0)
  const [color, setcolor] = useState(0)




  useEffect(() => {
    alert("Count was changed")
    setcolor(color + 1)
  }, [count])


  //useEffect(() => {
  //  alert("First was changed")
  //}, [first])

>>>>>>> 35539936934c7785514534e036ec4d959ae89fb5


  return (
    <>
<<<<<<< HEAD
=======
      <Navbar1 color={"navy" + "blue" + color} />
>>>>>>> 35539936934c7785514534e036ec4d959ae89fb5
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
<<<<<<< HEAD
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
=======
        <button onClick={() => setCount((count) => count + 1)}>
>>>>>>> 35539936934c7785514534e036ec4d959ae89fb5
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
