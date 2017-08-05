import React, { Component } from 'react';

import { MaterialStationSearchDropDown } from './MaterialStationSearchDropDown'
import { StationDropDown } from './StationDropDown'
import { Train } from './Train';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Train/>
        <div className="poop">
          <MaterialStationSearchDropDown />
        </div>
      </div>
    );
  }
}

export default App;
