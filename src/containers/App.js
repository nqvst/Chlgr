import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";
import { withStyles } from 'material-ui/styles';

import {
    Router,
    Route,
} from 'react-router-dom'


import Profile from "./Profile";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./SignUp";
import Home from "./Home";

import AppBar from './AppBar';

const styles = {
    container: {
        maxWidth: '700px',
        margin: '0 auto',
        marginTop: '50 px',
        padding: '16px',
    }
}

class App extends Component {
    render() {

        const { classes } = this.props;
        return (
            <div className="App">
                <Router history={this.props.history}>
                    <div>
                       <AppBar />
                        <div className={classes.container}>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/profile" component={Profile} />
                        </div>
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

export default connect( mapStateToProps,mapDispatchToProps)(withStyles(styles)(App));

