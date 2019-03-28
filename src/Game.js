import React, { Component } from 'react';
import './Game.scss';
import Board from './Board';

class Game extends Component {
  render() {
    return (
      <Board row="15" col="15" mines="80"></Board>
    );
  }
}

export default Game;
