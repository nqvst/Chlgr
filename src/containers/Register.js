import React, { Component } from "react";
import { connect } from "react-redux";

import RegisterForm from '../components/RegisterForm.js';
import { registerFirebase } from '../actions/AuthActions.js';

class Register extends Component {

    render() {
        const { authenticated, user } = this.props;

        return (
            <div>
                { !authenticated &&
                    <RegisterForm registerFirebase={this.props.registerFirebase} />
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
        registerFirebase: (email, password, username) => {
            dispatch(registerFirebase(email, password, username))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

