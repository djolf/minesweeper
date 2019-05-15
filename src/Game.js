import React, {useState} from 'react';
import './Game.scss';
import Board from './Board';

const Game = props => {
  const [gameId, setGameId] = useState(0);
  const [row, setRow] = useState(15);
  const [col, setCol] = useState(15);
  const [mines, setMines] = useState(30);


  const newGame = () => {
    setGameId(gameId+1);
  }

  const handleMinesChange = (e) => {
    setMines(Number(e.target.value));
  }
  const handleRowChange = (e) => {
    setRow(Number(e.target.value));
  }
  const handleColChange = (e) => {
    setCol(Number(e.target.value));
  }
  
  return (
    <div className="outer-wrapper">
      <div className="game-params">
        <div className="group">
          <label htmlFor="mines">Number of Mines:</label>
          <input type="number" name="mines" value={mines} onChange={handleMinesChange}/>
        </div>
        <div className="group">
          <label htmlFor="col">Number of Columns:</label>
          <input type="number" name="col" value={col} onChange={handleColChange}/>
        </div>
        <div className="group">
          <label htmlFor="row">Number of Rows:</label>
          <input type="number" name="row" value={row} onChange={handleRowChange}/>
        </div>
      </div>
      <Board row={row} col={col} mines={mines} key={gameId} newGame={newGame}></Board>
    </div>
  );
}

export default Game;
