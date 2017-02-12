import React from 'react';
import Frame from 'components/Frame';
import styles from './styles.scss';

const Result = ({ css, html, js }) =>
  <Frame>
    <style dangerouslySetInnerHTML={ { __html: css } } />
    <script dangerouslySetInnerHTML={ { __html: js } } />
    <div dangerouslySetInnerHTML={ { __html: html } } />
  </Frame>;

export default Result
