/* global React, ReactDnD, ReactDnDHTML5Backend, makeRandom */
import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import './board.css'

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.image = 'https://cdn.pbrd.co/images/HWu1T1v.jpg'
    this.doDrop = (o) => this.handleDrop(o)
    //this.random = makeRandom(8)
    this.state = {
      image: this.image,
      //  tile: this.random.next().value,
      done: true
    }
  }

  handleDrop({sourceKey, targetKey}) {
    // check if source matches target
    if (sourceKey != targetKey) return
    const { targets } = this.state
    const next = this.random.next().value
    targets[targetKey] = 0
    this.setState({
      targets: targets,
      tile: next || 0,
      done: next === undefined
    })
  }

  createContent({targets, done}) {
    if (done) return (<div id='board_congrats'>Congratulations!</div>)
  }

  render() {
    const { image, tile, done } = this.state
    return (
      <div id="board">
        <div id='board_target_container'
          style={{
            backgroundImage: `url(${this.image})`
          }}>
          {this.createContent(this.state)}
        </div>
        <div id="board_source_container">
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Board)
