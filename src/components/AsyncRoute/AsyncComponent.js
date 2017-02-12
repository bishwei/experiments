// @flow
import React, { Component } from 'react';
import omit from 'lodash/omit';

type PropType = {
  getComponent: () => Promise<*>
}

class AsyncComponent extends Component {
  static displayName = 'AsyncComponent';

  state = { LoadedComponent: null };

  componentWillMount() {
    if (this.state.LoadedComponent) {
      return;
    }
    this.getComponent();
  }

  getComponent() {
    const { getComponent } = this.props;
    getComponent().then((module) => {
      this.setState({
        LoadedComponent: module.default || module,
      });
    });
  }

  props: PropType;

  render() {
    const { LoadedComponent } = this.state;

    if (!LoadedComponent) {
      return null;
    }
    return <LoadedComponent { ...omit(this.props, 'getComponent') } />;
  }
}

export default AsyncComponent;
