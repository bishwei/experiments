// @flow
import React from 'react';
import BoardCell from './BoardCell';
import styles from './styles.scss';

type PropTypes = {
  pieces: Array<*>,
  size: number,
};

const renderBoardCells = (size) => {
  const boardCells = [];
  const sizePercentage = 100 / size;
  const numCells = size ** 2;

  for (let i = 0; i < numCells; i++) {
    boardCells.push(<BoardCell key={i} size={ sizePercentage } />);
  }

  return boardCells;
};

const Gameboard = ({
  size = 12,
}: PropTypes) =>
  <div className={ styles.gameboard }>
    { renderBoardCells(size) }
  </div>;

export default Gameboard;
