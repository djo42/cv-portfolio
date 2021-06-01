import './styles.scss'
import React from 'react'
import Buttoninput from './components/buttoninput.js'

export default function App() {
  return (
    <>
      <header></header>
      <main>
        <div className="App">
          <h1>Dennis John</h1>
          <h3>
            Automotive & Mobility Industry Expert | Franchise | Consulting
          </h3>
        </div>
        <div>
          <Buttoninput />
        </div>
      </main>
    </>
  )
}