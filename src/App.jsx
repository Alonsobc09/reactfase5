import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Box Model y Selectores CSS</h1>
      <div className="Integrantes">
        <h3>INTEGRANTES</h3>

        <h4>Alonso Bohorquez Corredor</h4>
        <h4>Cristian Lozano</h4>


        <h6>Enlace del proyecto</h6>
        <a href="index grupal.html">Click aqui para ir al proyecto</a>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
