import React, { useState,useEffect } from 'react';
import './Board.scss';
import Tile from './Tile';

const Board = props => {
  const [tiles, setTiles] = useState([]);
  const [gameStatus, setGameStatus] = useState(0);
  const [minesLeft, setMinesLeft] = useState(props.mines);

  const randomizeBombPositions = (row, col, mines) => {
    let total = row*col;
    let arr = Array(total-mines).fill(false).concat(Array(mines).fill(true));
    for (let i=arr.length-1;i>0;i--) {
      let j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const generateBoard = (row, col, mines) => {
    console.log(`creating array with row=${row}, col=${col}, mines=${mines}`);
    let bombs = randomizeBombPositions(row, col, mines);
    let tiles = Array(row).fill().map(()=>Array(col).fill());
    let index = 0;
    return tiles.map(row => {
      return row.map(() => {
        let tile = {
          isBomb: bombs[index],
          key: index,
          isOpen: false 
        }
        index++;
        return tile;
      });
    });
  }
  
  useEffect(()=>{
    setTiles(generateBoard(props.row, props.col, props.mines));
  },[])

  const gameOver = () => {
    setGameStatus(1);
  }

  const countAdjacentBombs = (x,y) => {
    var count = 0;
    if (tiles[x][y].isBomb) {
      return -1; //bomb, dont need to count
    }
    //up
    if (x>0 && tiles[x-1][y].isBomb) {
      count++;
    }
    //down
    if (x<props.row-1 && tiles[x+1][y].isBomb) {
      count++;
    }
    //left
    if (y>0 && tiles[x][y-1].isBomb) {
      count++;
    }
    //right
    if (y<props.col-1 && tiles[x][y+1].isBomb) {
      count++;
    }
    //top left
    if (x>0 && y>0 && tiles[x-1][y-1].isBomb) {
      count++;
    }
    //top right
    if (x>0 && y<props.col-1 && tiles[x-1][y+1].isBomb) {
      count++;
    }
    //bottom left
    if (x<props.row-1 && y>0 && tiles[x+1][y-1].isBomb) {
      count++;
    }
    //bottom right
    if (x<props.row-1 && y<props.col-1 && tiles[x+1][y+1].isBomb) {
      count++;
    }
    return count;
  }

  const openAdjacent = (x,y) => {
    // console.log("opening adjacent",x+","+y);
    let tilesArr = [...tiles];
    //up
    if (x>0) {
      tilesArr[x-1][y].isOpen = true;
    }
    //down
    if (x<props.row-1) {
      tilesArr[x+1][y].isOpen = true;
    }
    //left
    if (y>0) {
      tilesArr[x][y-1].isOpen = true;
    }
    //right
    if (y<props.col-1) {
      tilesArr[x][y+1].isOpen = true;
    }
    //top left
    if (x>0 && y>0) {
      tilesArr[x-1][y-1].isOpen = true;
    }
    //top right
    if (x>0 && y<props.col-1) {
      tilesArr[x-1][y+1].isOpen = true;
    }
    //bottom left
    if (x<props.row-1 && y>0) {
      tilesArr[x+1][y-1].isOpen = true;
    }
    //bottom right
    if (x<props.row-1 && y<props.col-1) {
      tilesArr[x+1][y+1].isOpen = true;
    }
    setTiles(tilesArr);
  }

  const updateBoard = (x,y,num) => {
    tiles[x][y].isOpen = true;
    if (!num) openAdjacent(x,y);
  }

  return (
    <div className="game-wrapper">
      <div className="info-panel">
        <div className="timer"></div>
        <div className="new-game" onClick={props.newGame}>New Game</div>
        <div className="quantity">{minesLeft}</div>
      </div>
      <div className="tile-container">
        {tiles.map((row,i) => {
          return (
            <div className="row" key={i}>
              {
                row.map((tile,j) => {
                  return (
                  <Tile 
                    isBomb={tile.isBomb} 
                    key={tile.key} 
                    x={i} 
                    y={j} 
                    num={countAdjacentBombs(i,j)}
                    gameOver={gameOver.bind(this)}
                    gameStatus={gameStatus}
                    openAdjacent={openAdjacent}
                    isOpen={tile.isOpen}
                    updateBoard={updateBoard}
                  />)
                })
              }
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Board;
