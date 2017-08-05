import React, { Component } from 'react';
import {
  Step,
  StepLabel,
  Stepper,
} from 'material-ui/Stepper';

import AppBar from 'material-ui/AppBar';
import Train from '../Train';
import Subheader from 'material-ui/Subheader';

class TrainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { station, detail, platform } = this.props.match.params;

    return (
      <div>
        <div
          className="mainApp"
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
            <Stepper className="stepper" activeStep={2}>
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
          <Subheader>{station} Station</Subheader>
          <Subheader>{detail} to city (Platform {platform})</Subheader>

          <Train cars={[2, 3]} capacityList={[10, 10, 10, 10, 10]}
           countList={[0, 2.5, 5, 7.5, 10]} />

          </div>
        </div>
      </div>
    );
  }
}

export default TrainPage;
