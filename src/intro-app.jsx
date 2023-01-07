import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import './main.css'

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0, 0, 0, 0.5)'
}

const estilo = (bg = '#333') => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
})

const Li = ({ children ,valor }) => {
  console.log({ children })
  return (
    <div>
      <li className="clase-li"> Chanchito { valor } { children }</li>
    </div>
    )
}

const App = () => {
  const valor = 'emocionado'
  return (
    <div>
      <ul className="clase-css">
        <Li valor={"feliz"}>czxczc</Li>
        <Li valor={"triste"}></Li>
        <Li valor={"emocionado"}></Li>
      </ul>
    </div>
  )
}

export default App
