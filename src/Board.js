import React, { Component } from 'react';
import './Board.scss';
import Tile from './Tile';

class Board extends Component {
  constructor(props) {
    super(props);
    
    this.generateBoard = this.generateBoard.bind(this);
    
    this.state = {
      tiles: this.generateBoard(Number(this.props.row), Number(this.props.col), Number(this.props.mines))
    };
  }

  generateBoard(row, col, mines) {
    console.log(`creating array with row=${row}, col=${col}, mines=${mines}`);
    let bombs = this.randomizeBombPositions(row, col, mines);
    let tiles = Array(row).fill().map(()=>Array(col).fill());
    let index = 0;
    return tiles.map((row,i) => {
      return (
        <div className="row" key={i}>
          {
            row.map((e,j) => {
              let tile = <Tile isBomb={bombs[index]} key={index} board={this} x={i} y={j} num="0"/>
              index++;
              return tile;
            })
          }  
        </div>
      )
    });
  }

  randomizeBombPositions(row, col, mines) {
    let total = row*col;
    let arr = Array(total-mines).fill(false).concat(Array(mines).fill(true));
    for (let i=arr.length-1;i>0;i--) {
      let j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  render() {
    return (
      <div className="tile-container">
        {this.state.tiles}
      </div>
    );
  }
}

export default Board;
