import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";
import injectSheet from 'react-jss'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Profile from "./Profile";
import Login from "./Login";
import Signup from "./SignUp";
import Home from "./Home";

const styles = {
  root: {
    maxWidth: '640px',
    margin: '0 auto',
  },
  nav: {
    listStyle: 'none',
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>
      <Router>
        <div>
          <ul className={classes.nav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>

    </div>;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(App));

// export default withStyles(styles)(App);
