// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    if (this.state.initialCount)
    return `${{this.state.secondsLeft}} seconds left before i go boom!`
  }

}
