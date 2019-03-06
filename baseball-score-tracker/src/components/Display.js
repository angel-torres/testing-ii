import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <div>{this.props.balls}</div>
        <div>{this.props.strikes}</div>
      </div>
    )
  }
}
