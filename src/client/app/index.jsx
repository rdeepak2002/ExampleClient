import React from 'react';
import {render} from 'react-dom';
import { Button } from 'react-bootstrap';

import AwesomeComponent from './view/AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));