import './styles.scss'
import React from 'react'

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
          <div className="input-wrapper">
            <div className="input-black">
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  console.log(
                    document.getElementById('email-input-field').value
                  )
                  document.getElementById('email-input-field').value = ''
                }}
              >
                <label display="none" htmlFor="email-input-field" />
                <input
                  type="email"
                  autoFocus={true}
                  autoComplete="off"
                  id="email-input-field"
                  maxLength="255"
                  placeholder="Enter your email..."
                  aria-label="Your email address"
                  required={true}
                />
                <button type="submit" className="">
                  Request CV
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
