import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.strike}>strike</button>
        <button onClick={this.props.ball}>ball</button>
        <button onClick={this.props.foul}>foul</button>
        <button onClick={this.props.hit}>hit</button>
      </div>
    )
  }
}
