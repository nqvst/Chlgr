import React, { Component } from "react";
import { connect } from "react-redux";

import CreateChallengeForm from '../components/CreateChallengeForm.js';
import { addChallenge } from '../actions/AuthActions.js';

class CreateChallenge extends Component {

    render() {
        const { authenticated, user, addChallenge } = this.props;

        console.log(this.props.user);

        return (
            <div>
                <CreateChallengeForm onClick={this.props.onClick} addChallenge={this.props.addChallenge} user={this.props.user}/>
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
        addChallenge: (challengeObj) => {
            dispatch(addChallenge(challengeObj))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateChallenge);

