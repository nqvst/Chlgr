import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from '../components/LoginForm.js';
import { loginFirebase } from '../actions/AuthActions.js';

class Login extends Component {

    render() {
        const { authenticated, user } = this.props;

        return (
            <div>
                { !authenticated &&
                    <LoginForm loginFirebase={this.props.loginFirebase} />
                }
                { authenticated &&
                    <h2>You are logged in as: { user.username }</h2>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {       
        loginFirebase: (email, password) => {
            dispatch(loginFirebase(email, password))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
