import React, { Component } from 'react';

import Dashboard from './components/Dashboard';
import Display from './components/Display';
import './App.css';

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
    foul: 0,
    hit: 0,
  }
  
  strike = () => {
    if (this.state.strikes === 2) {
      this.setState({
        strikes: 0,
        balls: 0,
        foul: 0,
        hit: 0,
      })
    } else {
      this.setState({
        ...this.state,
        strikes: this.state.strikes +1
      })
    }
  }
  
  ball = () => {
    if (this.state.balls === 3) {
      this.setState({
        strikes: 0,
        balls: 0,
        foul: 0,
        hit: 0,
      })
    } else {
      this.setState({
        ...this.state,
        balls: this.state.balls +1
      })
    }
  }
  
  foul = () => {
    if (this.state.strikes === 2) {
      this.setState({
        ...this.state
      })
    } else {
      this.setState({
        ...this.state,
        strikes: this.state.strikes +1
      })
    }
  }

  hit = () => {
    this.setState({
      strikes: 0,
      balls: 0,
      foul: 0,
      hit: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <Display 
          strikes={this.state.strikes} 
          balls={this.state.balls} 
          fouls={this.state.fouls} 
          hits={this.state.hits} 
        />
        <Dashboard 
          strike={this.strike}
          ball={this.ball}
          foul={this.foul}
          hit={this.hit}
        />
      </div>
    );
  }
}

export default App;
