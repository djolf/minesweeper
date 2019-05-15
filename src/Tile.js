import React, {useState, useEffect} from 'react';
import './Tile.scss';

const Tile = props => {
  const [isFlagged, setIsFlagged] = useState(false);
  const [isOpen, setIsOpen] = useState(props.isOpen);

  useEffect(() => {
    gameStatusChanged(props.gameStatus);
  }, [props.gameStatus]);

  useEffect(() => {
    if (props.isOpen) {
      click();
    } 
  }, [props.isOpen]);

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

  function printXY() {
    return props.x+','+props.y;
  }

  const click = () => {
    if (!isOpen && !isFlagged) {
      setIsOpen(true);
      props.updateBoard(props.x,props.y,props.num);
      if (props.isBomb) {
        props.gameOver();
      // } else {
        // if (props.num===0) {
        //   props.openAdjacent(props.x,props.y);
        // }
      }
    }
  }

  const rightClick = e => {
    e.preventDefault();
    if (!isOpen && props.gameStatus===0) {
      setIsFlagged(!isFlagged);
      props.setFlag(!isFlagged);
    }
  }

  
  return (
    <div className={getClasses()} onClick={click} onContextMenu={rightClick.bind(this)}>
      <span>{props.num}</span>
    </div>
  );
}

export default Tile;
