import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

class App extends React.Component {
  render() {
    return (
      <div>Test</div>
    );
  }
}

/**
 * Connect a React component to Redux Store. Subscribe to redux store
 * updates and pass to props of component
 *
 * @param {object} store Redux store current state
 */
function mapStateToProps(state) {
  return {
    store: state,
  };
}

export default connect(mapStateToProps)(App);
