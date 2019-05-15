import React, {useState} from 'react';
import './Game.scss';
import Board from './Board';

const Game = props => {
  const [gameId, setGameId] = useState(0);

  const newGame = () => {
    setGameId(gameId+1);
  }
  
  return (
    <Board row={15} col={15} mines={20} key={gameId} newGame={newGame}></Board>
  );
}

export default Game;
