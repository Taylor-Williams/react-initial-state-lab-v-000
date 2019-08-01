// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {

  constructor() {

  }

  render() {
    return `${{this.state.secondsLeft}} seconds left before i go boom!`
  }

}
