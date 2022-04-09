import React, {useState} from 'react';
import styles from "./App.module.css";
import { Board } from '../../components/Board';
import { useDispatch, useSelector } from 'react-redux';
import { continueGame, resetGame, updateChipPosition, updatePointWinner } from '../../redux/actions/ConnectFourActions';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { BoxSC, CardSC, TitleSC } from '../../components/ConnectFourStyledComponent';
import AlertDialog from '../../components/Modal';

export const ConnectFour = () => {

  const stateConnectFour= useSelector(state => state.ConnectFour);
  const dispatch= useDispatch();
  const [open, setOpen] = useState(false);

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
          const data={
            red: (repetitionCountStatus.playerChip === "#ff010b") ? (stateConnectFour.red+1) : stateConnectFour.red,
            yellow: (repetitionCountStatus.playerChip === "#ffff33") ? (stateConnectFour.yellow+1) : stateConnectFour.yellow,
          };
          dispatch(updatePointWinner(data));
          handleClickOpen();
          return true;
          // return `Player ${repetitionCountStatus.playerChip} won!`;
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
          const data={
            red: (repetitionCountStatus.playerChip === "#ff010b") ? (stateConnectFour.red+1) : stateConnectFour.red,
            yellow: (repetitionCountStatus.playerChip === "#ffff33") ? (stateConnectFour.yellow+1) : stateConnectFour.yellow,
          };
          dispatch(updatePointWinner(data));
          handleClickOpen();
          return true;
          // return `Player ${repetitionCountStatus.playerChip} won!`;
        }
      }
    }
    // TODO: Check four in a row diagonally
    return false;
    // return `It's ${playerTurn}'s turn`;
  };

  const handleTileClick = (tileId) => {
    const { chipsPositions, playerTurn, gameStatus } = stateConnectFour;
    if(!gameStatus){
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
      const newPlayerTurn = playerTurn === "#ff010b" ? "#ffff33": "#ff010b";
      // Calculate game status
      const gameStatusCheck = calculateGameStatus(newPlayerTurn, newChipsPositions);
      // Save new state
      const data={
        chipsPositions: newChipsPositions,
        playerTurn: newPlayerTurn,
        gameStatus: gameStatusCheck
      };
      dispatch(updateChipPosition(data));
    }
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContinue = () => {
    dispatch(continueGame());
  }
  
  const handleReset = () => {
    dispatch(resetGame());
  }

  return (
    <>
    <Container maxWidth="lg">
      <AlertDialog open={open} handleClose={handleClose} />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}  sx={{  marginTop: "10px", 
                                  padding: 0, 
                                  height: "90vh",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}>
          <CardSC>
            <TitleSC>Turno del jugador:</TitleSC>
            <BoxSC color={stateConnectFour.playerTurn}></BoxSC>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6} sx={{ marginTop: "10px"}}>
                <BoxSC height={100} color={"#ff010b"}>{stateConnectFour.red}</BoxSC>  
              </Grid>
              <Grid item xs={6} sx={{ marginTop: "10px"}}>
                <BoxSC height={100} color={"#ffff33"}>{stateConnectFour.yellow}</BoxSC>
              </Grid>
            </Grid>
            <Button onClick={handleContinue} sx={{ width: "100%", marginTop: "10px"}} color="primary" variant="contained">Continuar</Button>
            <Button onClick={handleReset} sx={{ width: "100%", marginTop: "10px"}} color="success" variant="contained">Reiniciar</Button>
          </CardSC>
        </Grid>
        <Grid item xs={8} sx={{ marginTop: "10px"}}>
                {renderBoard()}
        </Grid>
      </Grid>
    </Container>
    {/* <div className={styles.app}>
      {renderStatusMessage()}
    </div> */}
    </>
  )
}

