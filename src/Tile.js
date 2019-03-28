import React, { Component } from 'react';
import './Tile.scss';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlagged: false,
      isOpen: false,
    }
    this.click = this.click.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  click() {
    console.log(`(${this.props.x},${this.props.y})`);
    if (!this.state.isOpen && !this.state.isFlagged) {
      this.setState({
        isOpen: true
      });
    }
  }

  rightClick(e) {
    e.preventDefault();
    if (!this.state.isOpen) {
      this.setState({
        isFlagged: !this.state.isFlagged,
      });
    }
  }

  render() {
    let classes = `tile${this.state.isFlagged?' flagged':''}`;
    if (this.state.isOpen) {
      classes += ' open';
      if (this.props.isBomb) {
        classes += ' bomb';
      }
    }
    return (
      <div className={classes} onClick={this.click} onContextMenu={this.rightClick}>
        <span>{this.props.num}</span>
      </div>
    );
  }
}

export default Tile;
