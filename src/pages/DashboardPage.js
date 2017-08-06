import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import {
  Link
} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import StationSearchBar from '../StationSearchBar';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      station: ''
    };

  }

  handleUpdateInput = (value) => {
    this.setState({
      station: value
    });
  };

  render() {
    return (
      <div>
        <div
          className="mainApp"
          style={{
          }}
        >
          <AppBar
            title="Carriage Finder"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{
              backgroundColor: '#00A4D8',
            }}
          />
          <div
            className="container"
            style={{
              margin: 'auto',
              width: '80vw'
            }}
          >
            <div className="stepperContainer">
              <Stepper className="stepper" activeStep={0}>
                <Step>
                  <StepLabel>Select a station</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Choose a train</StepLabel>
                </Step>
                <Step>
                  <StepLabel>View fullness</StepLabel>
                </Step>
              </Stepper>
            </div>
            <div id="searchBarContainer" className="searchBarContainer" >
              <StationSearchBar handleUpdate={this.handleUpdateInput.bind(this)} style={{width: '40%'}} />
              <br />
              <Link
                to={`/stations/${this.state.station}`}
                >
                  <RaisedButton label="Search" primary={true}
                    backgroundColor='#00A4D8'
                    labelColor='#FFF'
                    style={{
                      marginTop: '1%'
                    }}
                  />
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
