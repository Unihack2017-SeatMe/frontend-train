import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import {
  Link
} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div
          className="mainApp"
          style={{
            height: '100vh',
            background: 'url(landing.jpg)',
            backgroundSize: 'cover',
          }}
        >
          <div className="overlay" style={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            height: '100%'
          }}>
            <AppBar
              title="Carriage Finder"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              style={{
                backgroundColor: 'rgba(0,0,0,0.4)',
              }}
            />
            <div className="sloganContainer">
              <h1
                className="slogan"
                style={{
                  color: '#FFF',
                  margin: '1% auto',
                }}
                >
                  A modern app using
                  <br />
                  <strong>Computer Vision</strong>
                  <br />
                  to determine the fullness of trains.
                </h1>
            </div>
            <div className="buttonContainer">
              <Link
                to="/dashboard"
                style={{
                  margin: 'auto !important'
                }}
              >
                <RaisedButton
                  className="getStartedButton"
                  label="Get Started"
                  backgroundColor='#00A4D8'
                  labelColor='#FFF'
                  // labelStyle={{
                  //   fontSize: '1.5em',
                  // }}
                  // buttonStyle={{
                  //   width: '400px',
                  //   height: '75px'
                  // }}
                  // overlayStyle={{
                  //   paddingTop: '20px'
                  // }}
                  // style={{
                  //   width: '400px',
                  //   height: '55px'
                  // }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
