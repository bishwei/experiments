// @flow
import React from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

type PropType = {
  isOccupied: boolean,
  width: number,
};

const BoardCell = ({
  isOccupied = false,
  size,
}: PropType) =>
  <div
    className={ classnames(styles.boardCell, { 'is-occupied': isOccupied }) }
    style={ { height: `${size}%`, width: `${size}%` } }
  />;

export default BoardCell;
