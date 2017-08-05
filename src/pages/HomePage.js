import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class HomePage extends Component {
  render() {
    return (
      <div>
        <img
          className="landing"
          src="landing.jpg"
          alt="landing"
          style={{
            filter: 'brightness(70%)'
          }}
        />
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
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}
          />
          <div className="row">
            <h1
              className="col-lg-8"
              style={{
                color: '#FFF',
                margin: '1% auto'
              }}
              >
                A modern app using
                <br />
                <strong>Computer Vision</strong>
                <br />
                to determine the fullness of trains.
              </h1>
          </div>
          <div className="row">
            <Link
              to="/dashboard"
              style={{
                margin: '2% auto'
              }}
            >
              <RaisedButton label="Get Started" primary={true}
                backgroundColor='#00A4D8'
                labelColor='#FFF'
                labelStyle={{
                  fontSize: '1.5em',
                  padding: '10%'
                }}
                buttonStyle={{
                  height: '84px',
                  width: '400px',
                }}
              />
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default HomePage;
