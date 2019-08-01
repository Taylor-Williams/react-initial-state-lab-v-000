// your ImageSlider code here!
import React, { Component } from 'react';
export default class ImageSlider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
      currentSlideIndex: this.props.secondsLeft
    }
  }

  render() {
    return `I am on slide ${{this.state.currentSlideIndex}}`
  }


}
