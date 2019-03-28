import React, { Component } from 'react';
import './Board.scss';
import Tile from './Tile';

class Board extends Component {
  render() {
    return (
      <div className="tile-container">
        <div className="row">
          <Tile isBomb="true"></Tile>
          <Tile isBomb="false" num="4"></Tile>
          <Tile isBomb="false" num="3"></Tile>
          <Tile isBomb="false" num="1"></Tile>
          <Tile isBomb="false" num="4"></Tile>
          <Tile isBomb="true"></Tile>
        </div>
        <div className="row">
          <Tile isBomb="true"></Tile>
          <Tile isBomb="false" num="4"></Tile>
          <Tile isBomb="false" num="3"></Tile>
          <Tile isBomb="false" num="1"></Tile>
          <Tile isBomb="false" num="4"></Tile>
          <Tile isBomb="true"></Tile>
        </div>
        <div className="row">
          <Tile isBomb="true"></Tile>
          <Tile isBomb="false" num="4"></Tile>
          <Tile isBomb="false" num="3"></Tile>
          <Tile isBomb="false" num="1"></Tile>
          <Tile isBomb="false" num="4"></Tile>
          <Tile isBomb="true"></Tile>
        </div>
      </div>
    );
  }
}

export default Board;
