import React from 'react';
import PropTypes from 'prop-types';
import { Colum } from '../Colum';
import styles from "./Board.module.css";

export const Board = ({ colums, rows, chipsPositions, onTileClick }) => {
    
    const renderColumns= () => {
        const columnsComponents = [];
        for (let column = 0; column < colums; column++) {
          columnsComponents.push(
            <Colum
              key={column}
              column={column}
              rows={rows}
              chipsPositions={chipsPositions}
              onTileClick={onTileClick}
            />
          );
        }
        return <>{columnsComponents}</>;
      }
  return (
    <div className={styles.board}>{renderColumns()}</div>
  )
}

Board.propTypes={
    colums: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    chipsPositions: PropTypes.object.isRequired,
    onTileClick: PropTypes.func.isRequired,
}
