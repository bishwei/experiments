import React from 'react';
import AsyncRoute from 'components/AsyncRoute';

const CodeEditorRoute = () =>
  <AsyncRoute path='/editor' getComponent={ () => System.import('components/CodeEditor') } />;

const TetrisRoute = () =>
  <AsyncRoute path='/tetris' getComponent={ () => System.import('components/Tetris') } />;

const RoutingExpRoute = () =>
  <AsyncRoute path='/routing-experiment' getComponent={ () => System.import('components/RoutingExperiment') } />;

const Routes = () =>
  <div>
    <CodeEditorRoute />
    <TetrisRoute />
    <RoutingExpRoute />
  </div>;

export default Routes;
