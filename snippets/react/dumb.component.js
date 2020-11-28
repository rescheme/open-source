/**
|===============================================================================
| DUMB COMPONENTS
|===============================================================================
|
| Dumb Components are encapsulated React components that are driven solely by
| props and don't talk to Redux. They should stay the same regardless of your
| router, data fetching library, etc.
|
| "Dumb" components aka "presentational" components are components that receive
| all data by props, aren't aware of Redux, and only specify the appearance but
| not the behaviour.
|
*/

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function SmartDumb(props) {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">About Us</h1>
        <p>
          This is a template for a simple marketing or informational website.
          It includes a large callout called a jumbotron and three supporting pieces of content.
          Use it as a starting point to create something more unique.
        </p>
        <p><button type="button" className="btn btn-primary btn-lg">Learn more »</button></p>
      </div>
    </div>
  );
}
