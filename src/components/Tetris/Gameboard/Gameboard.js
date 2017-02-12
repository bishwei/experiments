// @flow
import React from 'react';
import BoardCell from './BoardCell';
import styles from './styles.scss';

type PropTypes = {
  pieces: Array<*>,
  size: number,
};

const initEmptyBoard = size =>
  Array(size).fill().map(() =>
    Array(size).fill().map(() => ({
      isOccupied: false,
      shape: null,
    }))
  );

const addPieceToBoard = (board, piece) => {
  const { shape, rotation, x, y } = piece;
  if (shape !== 2) {
    return board;
  }
  switch (rotation) {
    case 0:
      board[x][y - 1].isOccupied = true;
      board[x][y - 1].shape = 'S';
      board[x + 1][y - 1].isOccupied = true;
      board[x + 1][y - 1].shape = 'S';
      board[x + 1][y].isOccupied = true;
      board[x + 1][y].shape = 'S';
      board[x + 2][y].isOccupied = true;
      board[x + 2][y].shape = 'S';
      break;
    case 1:
      board[x][y].isOccupied = true;
      board[x][y].shape = 'S';
      board[x][y - 1].isOccupied = true;
      board[x][y - 1].shape = 'S';
      board[x + 1][y - 1].isOccupied = true;
      board[x + 1][y - 1].shape = 'S';
      board[x + 1][y - 2].isOccupied = true;
      board[x + 1][y - 2].shape = 'S';
      break;
    default:
      // no-op
  }
  return board;
};

const renderBoardCells = (pieces, size) => {
  const width = 100 / size;

  const gameboard = pieces.reduce((board, piece) =>
    addPieceToBoard(board, piece), initEmptyBoard(size)
  );
  return gameboard.map((row, idx) =>
    row.map((col, idy) =>
      <BoardCell
        key={ `${idx},${idy}` }
        isOccupied={ col.isOccupied }
        shape={ col.shape }
        size={ width }
      />)
  );
};

const Gameboard = ({
  pieces = [],
  size = 12,
}: PropTypes) =>
  <div className={ styles.gameboard }>
    { renderBoardCells(pieces, size) }
  </div>;

export default Gameboard;
