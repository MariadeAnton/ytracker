import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';

import { Home, Yachts, Company, Captains, Users } from "./containers";
import { NavBar } from "./modules";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <CssBaseline />
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/yachts" component={Yachts} />
            <Route exact path="/company" component={Company} />
            <Route exact path="/captains" component={Captains} />
            <Route exact path="/users" component={Users} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

function mapStateToProps({}) {
  return {};
}

export default connect(
  mapStateToProps,
)(App);