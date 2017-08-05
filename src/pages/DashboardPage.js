import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import {
  Link
} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import StationSearchBar from '../StationSearchBar';

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
              <StationSearchBar handleUpdate={this.handleUpdateInput.bind(this)} style={{width: '60%'}} />
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
            <div className="col-lg-3 col-md-2 col-xs-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
