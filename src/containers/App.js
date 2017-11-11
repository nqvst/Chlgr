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
import Register from "./Register";
import Home from "./Home";
import ChallengePage from './ChallengePage';
import firebaseConnect from '../firebase/FirebaseConnect';

import AppBar from './AppBar';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '700px',
        margin: '0 auto',
        marginTop: '50 px',
        padding: '16px',
    }
}

class App extends Component {

    componentDidMount() {
        firebaseConnect(this.props);
    }
    
    render() {

        const { classes, initialChallengesToState, challengeAdded, challegeDeleted, challengeChanged } = this.props;
        return (
            <div className="App">
                <Router history={this.props.history}>
                    <div>
                       <AppBar />
                        <div className={classes.container}>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/register" component={Register} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/c/:id" component={ChallengePage} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        challenges: state.challenges.authenticated,
        user: state.auth.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch),

        initialChallengesToState: (challenges) => {
            dispatch({
              type: "SET_INITIAL_CHALLANGES",
              payload: challenges
            })
          },
        challengeAdded: (challenge) => {
            dispatch({
              type: "CHALLANGE_ADDED",
              payload: challenge
            })
          },
        challegeDeleted: (challenge) => {
            dispatch({
              type: "CHALLANGE_DELETED",
              payload: challenge
            })
          },
        challengeChanged: (challenge) => {
            dispatch({
              type: "CHALLANGE_CHANGED",
              payload: challenge
            })
          },
          
    };
}

export default connect( mapStateToProps,mapDispatchToProps)(withStyles(styles)(App));

