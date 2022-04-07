import React from 'react';
import styles from "./App.module.css";
import { Board } from '../../components/Board';
import { useDispatch, useSelector } from 'react-redux';
import { updateChipPosition } from '../../redux/actions/ConnectFourActions';
import { Navbar } from 'framework7-react';

export const ConnectFour = () => {

  const stateConnectFour= useSelector(state => state.ConnectFour);
  const dispatch= useDispatch();

  const calculateGameStatus = (playerTurn, chipsPositions) => {
    const { colums, rows } = stateConnectFour;
    // Check four in a row horizontally
    for (let row = 0; row < rows; row++) {
      let repetitionCountStatus = { playerChip: "", count: 0 };
    for (let column = 0; column < colums; column++) {
        const chip = chipsPositions[`${row}:${column}`];
        
        // If there is a chip in that position, and belongs
        // to a player, count that chip for that player 
        // (either increase the count or start over)
        if (chip && chip === repetitionCountStatus.playerChip) {
          repetitionCountStatus.count++;
        } else {
          repetitionCountStatus = { playerChip: chip, count: 1 };
        }
        // If the count for a player is 4, that player won
        if (repetitionCountStatus.count === 4) {
           return `Player ${repetitionCountStatus.playerChip} won!`;
        }
      }
    }
    // Check four in a row vertically
    for (let column = 0; column < colums; column++) {
      let repetitionCountStatus = { playerChip: "", count: 0 };
      
      for (let row = 0; row < rows; row++) {
        const chip = chipsPositions[`${row}:${column}`];
        // If there is a chip in that position, and belongs 
        // to a player, count that chip for that player
        // (either increase the count or start over)
        if (chip && chip === repetitionCountStatus.playerChip) {
          repetitionCountStatus.count++;
        } else {
          repetitionCountStatus = { playerChip: chip, count: 1 };
        }
        // If the count for a player is 4, that player won
        if (repetitionCountStatus.count === 4) {
          return `Player ${repetitionCountStatus.playerChip} won!`;
        }
      }
    }
    // TODO: Check four in a row diagonally
    
    return `It's ${playerTurn}'s turn`;
  };

  const handleTileClick = (tileId) => {
    const { chipsPositions, playerTurn } = stateConnectFour;
    // Get the last empty tile of the column
    const column = parseInt(tileId.split(":")[1]);
    // console.log(column);
    let lastEmptyTileId = getLastEmptyTile(column);
    // If there is no empty tile in the column, do nothing
    if (!lastEmptyTileId) {
      return;
    }
    // Add chip to empty tile
    const newChipsPositions = {
      ...chipsPositions,
      [lastEmptyTileId]: playerTurn
    };
    // Change player turn
    const newPlayerTurn = playerTurn === "red" ? "yellow" : "red";
    // Calculate game status
    const gameStatus = calculateGameStatus(newPlayerTurn, newChipsPositions);
    // Save new state
    const data={
      chipsPositions: newChipsPositions,
      playerTurn: newPlayerTurn,
      gameStatus: gameStatus
    };
    dispatch(updateChipPosition(data));
  };

  const getLastEmptyTile = (column) => {
    const { rows, chipsPositions } = stateConnectFour;
    
    for (let row = rows - 1; row >= 0; row--) {
      const tileId = `${row}:${column}`;

      if (!chipsPositions[tileId]) {
        return tileId;
      }
    }
  }

  const renderBoard = () => {
    return (
      <Board
        colums={stateConnectFour.colums}
        rows={stateConnectFour.rows}
        chipsPositions={stateConnectFour.chipsPositions}
        onTileClick={handleTileClick}
      />
    );
  }

  const renderStatusMessage = () => {
    return <div className={styles.statusMessage}>{stateConnectFour.gameStatus}</div>;
  }

  return (
    <>

    <div className={styles.app}>
      {renderBoard()}
      {renderStatusMessage()}
    </div>
    </>
  )
}

// ConnectFour.propTypes={
//   column: PropTypes.number.isRequired,
//   rows:  PropTypes.number.isRequired,
// }

