import React, { Component } from 'react';
import './App.css';
import CreatePlayer from './createPlayer.js';
import { DisplayCard } from './displayCard.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  createPlayer(player) {
    Object.assign(player, { id: Date.now() });
    this.state.players.push(player);
    this.setState({ players: this.state.players });
  }

  render() {
    const cards = this.state.players.map((player, i) => <DisplayCard key={player.id } {...player} />)
    return (
      <div className="app">
        <div className="app-header">
          <h2>TestingBox</h2>
        </div>
        <CreatePlayer submitPlayer={(state) => this.createPlayer(state)}/>

        <div>
        {cards}
        </div>
      </div>
    );
  }
}

export default App;
