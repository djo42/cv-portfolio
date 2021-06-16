import './styles.scss'
import React from 'react'
// import Buttoninput from './components/buttoninput.js'
// import Businesscard from './components/businesscard.js'
export default function App() {
  const hdl1 = 'Business Development | Strategy & Expansion | Digital Solutions'
  const root = document.documentElement

  console.log(hdl1.length)

  root.style.setProperty('--length', hdl1.length)
  root.style.setProperty('--lengthkey', hdl1.length + 'ch')

  return (
    <>
      <header></header>
      <main>
        <div className="business-card">
          <h1>Dennis John</h1>
          <h3 className="animated-text">{hdl1}</h3>
          <p>dennis@john.international</p>
        </div>
      </main>
    </>
  )
}
