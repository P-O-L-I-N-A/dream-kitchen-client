import React, { Component } from 'react'
import './App.css'
import Board from './board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dream Kitchen App</h1>
        </header>
        <p className="App-intro">
        </p>
        <Board />
      </div>
    )
  }
}
/* To get started, edit <code>src/App.js</code> and save to reload ^^ inside p tags. */
export default App
