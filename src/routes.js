import React from 'react';
import AsyncRoute from 'components/AsyncRoute';

const TetrisRoute = () =>
  <AsyncRoute pattern='/tetris' getComponent={ () => System.import('pages/Tetris') } />;

const Routes = () =>
  <div>
    <TetrisRoute />
  </div>;

export default Routes;
