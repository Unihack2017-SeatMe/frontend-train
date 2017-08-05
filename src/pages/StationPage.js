import {List, ListItem} from 'material-ui/List';
import React, { Component } from 'react';
import {green500, orange500, red500} from 'material-ui/styles/colors';

import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ImageTimer from 'material-ui/svg-icons/image/timer';
import {
  Link
} from 'react-router-dom'
import MinsFromNow from '../MinsFromNow';
import Subheader from 'material-ui/Subheader';

class StationPage extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    const date = new Date();
    const time = date.getTime();

    console.log(time);

    this.state = {
      station: props.match.params.id,
      
    };

    this.renderArrivalTimes();
  }

  renderArrivalTimes() {
    console.log('rendering arrival times');
    var currentTime = new Date();
    var times = [];
    var rowsToRender = 8;
    var futureTime = new Date();

    var seenTimes = new Set();

    for (var i = 0; i < rowsToRender; i++) {
      var platformNumber = Math.floor(Math.random() * 5 + 1);
      var randomTimeIncrement = Math.floor(Math.random() * 16 + 2);
      futureTime.setTime(currentTime.getTime() + (60 * 1000 * randomTimeIncrement));
      var hours = futureTime.getHours();
      var mins = futureTime.getMinutes();
      var formattedTime = hours + ':' + ((mins < 10) ? "0" + mins : mins);

      if (seenTimes.has(formattedTime)) {
        i -= 1;
        continue;
      } else {
        seenTimes.add(formattedTime);
      }
      var waitTimeMins = ((hours - currentTime.getHours()) * 60) + (mins - currentTime.getMinutes());

      var data = {
        'platform': platformNumber,
        'time_remaining': waitTimeMins,
        'current_time': formattedTime
      }
      times.push(data);
    }
    // Sort array.
    times.sort(function(a, b) {
      return a.time_remaining - b.time_remaining
    });
    
    return times.map((timeData, i) => {
      console.log(timeData.time_remaining)
      var colour;
      if (timeData.time_remaining < 5) {
        colour = green500;
      } else if (timeData.time_remaining < 11 ) {
        colour = orange500;
      } else {
        colour = red500;
      }
    
      return (
        <div key={i}>
          <ListItem 
            
            primaryText={`${timeData.current_time} to the city`}
            secondaryText={`Platform ${timeData.platform}`}
            rightIcon={<ImageTimer color={colour} />}
          />
          <Divider />
        </div>
      );
    })
  }


  render() {
    var currentTime = new Date();
    var mins = currentTime.getMinutes();
    var formattedTime = currentTime.getHours() + ":" + ((mins < 10) ? "0" + mins : mins);
    return (
      <div>
        <div
          className="mainApp"
          style={{
            position: 'absolute',
            top: 0,
            width: '100%'
          }}
        >
          <AppBar
            title="Carriage Finder"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{
              backgroundColor: '#00A4D8',
            }}
          />
          <div className="row" style={{marginTop: '2%'}}>
            <div className="col-lg-3 col-md-2 col-xs-1" />
            <div className="col-lg-6 col-md-8 col-xs-10">
              <List>
                <h3>{`${this.state.station} Station: ${formattedTime}`}</h3>
                {this.renderArrivalTimes()}
              </List>
            </div>
            <div className="col-lg-3 col-md-2 col-xs-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default StationPage;
