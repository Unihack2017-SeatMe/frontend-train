import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import {
  Link
} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
class StationPage extends Component {
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
                <Subheader>{this.state.station} Station</Subheader>
                <ListItem
                  primaryText="Photos"
                  secondaryText="Jan 9, 2014"
                />
                <Divider />
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
