import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import styles from "./Tile.module.css";

export const Tile = ({id,chipType,onClick}) => {

  const chipCssClass = classNames(styles.chip, chipType === "red" ? styles.red : styles.yellow);

  return (
    <div className={styles.tile} onClick={() => onClick(id)}>
    {chipType && <div className={chipCssClass} />}
  </div>
  )
}

Tile.propTypes={
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}