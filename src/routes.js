import React from 'react';
import AsyncRoute from 'components/AsyncRoute';

const CodeEditorRoute = () =>
  <AsyncRoute path='/editor' getComponent={ () => System.import('components/CodeEditor') } />;

const TetrisRoute = () =>
  <AsyncRoute path='/tetris' getComponent={ () => System.import('components/Tetris') } />;

const Routes = () =>
  <div>
    <CodeEditorRoute />
    <TetrisRoute />
  </div>;

export default Routes;
