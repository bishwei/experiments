import React from 'react';
import Gameboard from './Gameboard';

const SHAPES = {
  O: 0, // square
  I: 1, // line
  S: 2,
  Z: 3,
  T: 4,
  L: 5,
  J: 6,
};

const pieces = [{
  shape: SHAPES.S,
  rotation: 1,
  x: 6,
  y: 8,
}];

const Tetris = () =>
  <Gameboard pieces={ pieces } />;

export default Tetris;
