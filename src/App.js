import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/dashboard" component={DashboardPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
  // <img className="landing" src="landing.jpg" alt="landing"/>
  //       <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  //         <header className="mdl-layout__header mdl-layout__header--transparent">
  //           <div className="mdl-layout__header-row">
  //             <span className="mdl-layout-title">Carriage Finder</span>
  //           </div>
  //         </header>
  //         <div className="mdl-layout__drawer">
  //           <span className="mdl-layout-title">Carriage Finder</span>
  //         </div>
  //         <main className="mdl-layout__content">
  //           <div className="demo-card-square mdl-card mdl-shadow--2dp">
  //             <div className="poop">
  //               <StationDropDown />
  //             </div>
  //             <div className="mdl-card__supporting-text">
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //               Aenan convallis.
  //             </div>
  //             <div className="mdl-card__actions mdl-card--border">
  //               <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
  //                 View Updates
  //               </a>
  //             </div>
  //           </div>
  //         </main>
  //       </div>
