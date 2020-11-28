/**
|===============================================================================
| SMART COMPONENTS or CONTAINERS
|===============================================================================
|
| Containers or Smart Components are React components that are aware of
| Redux, Router, etc. They are more coupled to the app.
|
*/

import React from 'react';
import { Link } from 'react-router-dom';

import SmartDumb from './smart-dumb.component';

class SmartContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Featured Images</h2>

        <ul>
          <li>
            <Link to="/img/2">Tomato</Link>
          </li>
          <li>
            <Link to="/img/4">Crimson</Link>
          </li>
        </ul>

        <SmartDumb />
      </div>
    );
  }
}

export default Smart;
