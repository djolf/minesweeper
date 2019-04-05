import React, {useState, useEffect} from 'react';
import './Tile.scss';

const Tile = props => {
  const [isFlagged, setIsFlagged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gameStatusChanged(props.gameStatus);
  }, [props.gameStatus]);

  const gameStatusChanged = gameStatus => {
    if (gameStatus === 1) {
      // gameover
      if (!isFlagged) {
        setIsOpen(true);
      }
    }
    
  }

  const getClasses = () => {
    let classes = `tile${isFlagged?' flagged':''}`;
    if (isOpen) {
      classes += ' open';
      if (props.isBomb) {
        classes += ' bomb';
      }
    }
    return classes;
  }


  const click = () => {
    if (!isOpen && !isFlagged) {
      if (props.isBomb) {
        props.gameOver();
      }
      setIsOpen(true);
    }
  }

  const rightClick = e => {
    e.preventDefault();
    if (!isOpen) {
      setIsFlagged(!isFlagged);
    }
  }

  
  return (
    <div className={getClasses()} onClick={click.bind(this)} onContextMenu={rightClick.bind(this)}>
      <span>{props.num}</span>
    </div>
  );
}

export default Tile;
