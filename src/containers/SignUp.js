import React, { Component } from "react";
import { connect } from "react-redux";

import RegisterForm from '../components/RegisterForm.js';
import { registerFirebase } from '../actions/AuthActions.js';

class SignUp extends Component {

    render() {
        return (
            <div>
                <RegisterForm registerFirebase={this.props.registerFirebase} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerFirebase: (email, password, username) => {
            dispatch(registerFirebase(email, password, username))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

