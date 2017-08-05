import React, { Component } from 'react';

import { StationDropDown } from './StationDropDown'
import { Train } from './Train';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Train/>
        <div className="poop">
          <StationDropDown />
        </div>
      </div>
    );
  }
}

export default App;
