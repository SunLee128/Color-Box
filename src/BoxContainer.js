import React, { Component } from 'react'
import Box from './Box'
import "./BoxContainer.css"

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 15,
    allColors: ["purple", "magenta","pink", "violet", "mistyrose"]
  }
  render() {
    //creating boxes
    const boxes = Array.from({length: this.props.numBoxes}).map(()=>(
      <Box colors = {this.props.allColors}/>
    ))
    return (
      <div className="BoxContainer">
        {boxes}
      </div>
    )
  }
}

export default BoxContainer;