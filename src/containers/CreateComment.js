import React, { Component } from "react";
import { connect } from "react-redux";

import CreateCommentForm from '../components/CreateCommentForm.js';
import { addComment } from '../actions/ChallengeActions.js';

class CreateComment extends Component {

    render() {
        const { authenticated, user, addComment, challengeId } = this.props;

        return (
            <div>
                <CreateCommentForm onClick={this.props.onClick} addComment={(comment) => {this.props.addComment(comment, challengeId)}} user={this.props.user} />
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
        addComment: (commentObj, challengeId) => {
            dispatch(addComment(commentObj, challengeId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);

