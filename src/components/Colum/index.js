import React from 'react';
import { Tile } from '../Tile';
import styles from "./Colum.module.css";
import PropTypes from 'prop-types';

export const Colum = ({ column, rows, chipsPositions, onTileClick }) => {
  const tiles = [];
  for (let row = 0; row < rows; row++) {
    const tileId = `${row}:${column}`;
    const chipType = chipsPositions[tileId];
    // console.log(chipType);
    tiles.push(
      <Tile
        key={tileId}
        id={tileId}
        chipType={chipType}
        onClick={onTileClick}
      />
    );
  }

  return (
    <div className={styles.column}>{tiles}</div>
  )
}

Colum.propTypes={
  column: PropTypes.number.isRequired,
  rows:  PropTypes.number.isRequired,
  // chipsPositions: PropTypes.ChipsPositions.isRequired,
  onTileClick: PropTypes.func.isRequired
}
