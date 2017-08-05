import {List, ListItem} from 'material-ui/List';
import React, { Component } from 'react';
import {
  Step,
  StepLabel,
  Stepper,
} from 'material-ui/Stepper';
import {blue500, yellow600} from 'material-ui/styles/colors';

import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {
  Link
} from 'react-router-dom'
import Subheader from 'material-ui/Subheader';
import Train from '../Train';

class TrainPage extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    const date = new Date();
    const time = date.getTime();

    console.log(time);

    this.state = {
      station: props.match.params.id,
      time
    };
  }

  render() {
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

            FKING FULL KUNT

            <Train cars={[2, 3]} capacityList={[10, 10, 10, 10, 10]}
             countList={[0, 2.5, 5, 7.5, 10]} />
            
          </div>
        </div>
      </div>
    );
  }
}

export default TrainPage;
