import React, { Component } from 'react'
import {choice} from './helpers'
import './Box.css'

class Box extends Component {
  static defaultProps = {
    allColors: ["purple", "magenta","pink"]
  }
  constructor(props){
    super(props);
    this.state = {color: choice(this.props.allColors)};
    this.handleClick = this.handleClick.bind(this)
  }

  pickColor(){
    //prevents selecting the same color in a row
    let newColor 
    do {
      newColor = choice(this.props.allColors)
    } while(newColor === this.state.color)
    this.setState({color: newColor})
  }

  handleClick(){
    this.pickColor();
  }

  render () {
    return (
      <div className="Box" 
        style = {{backgroundColor: this.state.color}}
        onClick = {this.handleClick}>

      </div>
    )
  }
}

export default Box;