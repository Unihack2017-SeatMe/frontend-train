import React, { Component } from 'react';
import {
  Step,
  StepLabel,
  Stepper,
} from 'material-ui/Stepper';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {
  Link
} from 'react-router-dom'
import {ShittyComponent} from '../ShittyComponent';
import SocketIo from 'socket.io-client';
import Subheader from 'material-ui/Subheader';
import Train from '../Train';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { state } from './State';

@observer
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

  componentDidMount() {
    this.socket = SocketIo.connect('http://118.139.19.176:8080' );
    this.socket.on('all_room_data', action((roomDataArray) => {
      console.log(roomDataArray)
      let i = 0;
      // var rand = [];
      // for (var p = 0; p < 5; p++) {
      //   var num = Math.floor(Math.random() * 20);
      //   rand.push(num);
      // }

      // var rand2 = [];
      // for (var k = 0; k < 5; k++) {
      //   var num = Math.floor(Math.random() * 20);
      //   rand2.push(num);
      // }
      while(state.countList.length > 0) {
        state.countList.pop();
      }
      while(state.capacityList.length > 0) {
        state.capacityList.pop();
      }
      for(let item of roomDataArray) {
        if(i >= 5) {
          break;
        }
        state.capacityList.push(item.capacity);
        state.countList.push(item.count);
        i++;
      }
      // state.capacityList = rand;
      // state.countList = rand2;
      this.forceUpdate();
    }));
  }

  render() {
    console.log(this.state)

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

          <Train cars={[2, 3]} />
            
          <ShittyComponent index={0}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TrainPage;
