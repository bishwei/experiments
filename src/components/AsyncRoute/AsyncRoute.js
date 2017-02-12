// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import AsyncComponent from './AsyncComponent';

type PropType = {
  componentProps: Object,
  getComponent: () => Promise<*>,
  rest: Array<any>,
};

const AsyncRoute = ({
  componentProps = {},
  getComponent,
  ...rest,
}: PropType) =>
  <Route
    { ...rest }
    render={ matchProps =>
      <AsyncComponent
        getComponent={ getComponent }
        { ...componentProps }
        { ...matchProps }
      />
    }
  />;

export default AsyncRoute;
