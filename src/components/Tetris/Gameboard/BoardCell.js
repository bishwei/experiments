// @flow
import React from 'react';
import classnames from 'classnames';
import styles from './styles.scss';

type PropType = {
  isOccupied: boolean,
  shape: string,
  size: number,
};

const BoardCell = ({
  isOccupied = false,
  shape,
  size,
}: PropType) =>
  <div
    className={ classnames(styles.boardCell, {
      'is-occupied': isOccupied,
      [styles.shape]: !!shape,
      [styles[shape]]: !!shape,
    }) }
    style={ { height: `${size}%`, width: `${size}%` } }
  />;

export default BoardCell;
