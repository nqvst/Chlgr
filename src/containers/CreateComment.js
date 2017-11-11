import React, { Component } from "react";
import { connect } from "react-redux";

import CreateCommentForm from '../components/CreateCommentForm.js';
import { addComment } from '../actions/CommentActions.js';

class CreateComment extends Component {

    render() {
        const { authenticated, user, addComment } = this.props;

        console.log(this.props.user);

        return (
            <div>
                <CreateCommentForm onClick={this.props.onClick} addComment={this.props.addComment} user={this.props.user}/>
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
        addComment: (commentObj) => {
            dispatch(addComment(commentObj))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);

