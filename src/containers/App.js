import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import Profile from "./Profile";
import Login from "./Login";
import Signup from "./SignUp";
import Home from "./Home";

import AppBar from './AppBar';

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <Router>
                    <div>
                       <AppBar />

                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/profile" component={Profile} />
                    </div>
                </Router>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default withStyles(styles)(App);
