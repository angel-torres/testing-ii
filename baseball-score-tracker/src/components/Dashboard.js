import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <button title="strike" onClick={this.props.strike}>strike</button>
        <button title="ball" onClick={this.props.ball}>ball</button>
        <button title="foul" onClick={this.props.foul}>foul</button>
        <button title="hit" onClick={this.props.hit}>hit</button>
      </div>
    )
  }
}
