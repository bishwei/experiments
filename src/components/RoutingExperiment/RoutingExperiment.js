import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import { Route, Link } from 'react-router-dom';

const Color = ({ match }) =>
  <div style={ { background: match.params.color, width: '100%', height: '100%' } } />;

class RoutingExperiment extends PureComponent {
  state = { colors: [] }
  componentDidMount() {
    this.getColors().then(colors => this.setState({ colors }));
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getColors() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const colors = [];
        for (let i = 0; i < 40; i++) {
          colors.push(this.getRandomColor());
        }
        resolve(colors);
      }, 0);
    });
  }

  renderModal() {
    const { location, match } = this.props;
    console.log('Props', location, match);
    const { colors } = this.state;
    const { state: locationState } = location;
    const nextColorIdx = locationState ? locationState.idx + 1 : -1;
    const nextColor = colors[nextColorIdx];
    return (
      <Modal
        isOpen={ locationState && locationState.isModal }
        contentLabel='modal'
      >
        <Route path={ `${match.url}/color/:color` } component={ Color } />
        { (locationState && locationState.prevURL) &&
          <Link to={ { pathname: locationState.prevURL, state: { idx: locationState.prevIdx, prevURL: location.pathname, isModal: locationState.isModal, returnURL: locationState.returnURL } } }>Preious</Link> }
        { nextColor && <Link to={ { pathname: `${match.url}/color/${nextColor}`, state: { idx: nextColorIdx, prevIdx: locationState.idx, prevURL: location.pathname, isModal: locationState.isModal, returnURL: locationState.returnURL } } } >Next Color</Link> }
        <Link to={ locationState && locationState.returnURL }>Close Modal</Link>
      </Modal>
    );
  }

  render() {
    const { location, match } = this.props;
    const { colors } = this.state;

    return (
      <div style={ { display: 'flex', flexWrap: 'wrap' } } >
        {
          colors.map((color, idx) => {
            const remainingColors = colors.slice(idx + 1);
            return (
              <Link key={ color } to={ { pathname: `${match.url}/color/${color}`, state: { isModal: true, idx, returnURL: location.pathname } } }>
                <div style={ { background: color, minWidth: 100, minHeight: 100 } } />
              </Link>
            );
          })
        }
        { this.renderModal() }
      </div>
    );
  }
}

export default RoutingExperiment;
