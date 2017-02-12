// @flow
import React, { Component } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom'; // eslint-disable-line camelcase

type PropType = {
  children: Array<any>,
};

class Frame extends Component {
  componentDidMount() {
    this.renderIframeContent();
  }

  componentDidUpdate() {
    this.renderIframeContent();
  }

  getFrameRef = ref => (this.frame = ref);

  props: PropType

  renderIframeContent() {
    if (!this.iframeContent) {
      this.iframeContent = document.createElement('div');
      this.frame.contentDocument.body.appendChild(this.iframeContent);
    }

    unstable_renderSubtreeIntoContainer(this, <div { ...this.props } />, this.iframeContent );
  }

  render() {
    return <iframe ref={ this.getFrameRef } />;
  }
}

export default Frame;
