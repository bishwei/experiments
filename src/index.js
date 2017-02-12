import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './styles/application.scss';

const renderApplication = (component, mountNode) => {
  if (!mountNode) {
    throw new Error('No valid dom element found!');
  }
  render(component, mountNode);
};

const Application = () =>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>;

renderApplication(
  <Application />,
  document.querySelector('main'),
);
