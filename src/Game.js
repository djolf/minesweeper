import React from 'react';
import './Game.scss';
import Board from './Board';

const Game = props => {
  
  return (
    <Board row={15} col={15} mines={80}></Board>
  );
}

export default Game;
