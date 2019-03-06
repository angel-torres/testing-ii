import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <div>Strikes: {this.props.strikes}</div>
        <div>Balls: {this.props.balls}</div>
        <div>Fouls: {this.props.fouls}</div>
        <div>Hits: {this.props.hits}</div>
      </div>
    )
  }
}
