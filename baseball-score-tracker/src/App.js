import React, { Component } from 'react';

import Dashboaard from './components/Dashboard';
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
    
  }

  ball = () => {

  }

  foul = () => {

  }

  hit = () => {

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
        <Dashoard 
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
