import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles'
import { Button } from 'material-ui';
import CreateChallenge from './CreateChallenge.js';
import ChallengeList from '../components/ChallengeList.js';
import firebaseConnect, { listenForChangesInChallenges } from '../firebase/FirebaseConnect';





const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});


class Home extends Component {
    state = {
        showCreateChallengeForm: false,
    }


    componentDidMount() {
        const { challengeAdded, challengeChanged, challegeDeleted } = this.props;

        listenForChangesInChallenges({
            added: challengeAdded,
            changed: challengeChanged,
            removed: challegeDeleted,
        });
    }

    create = (value) => {
        this.setState({ showCreateChallengeForm: value })
    }

    render() {
        const { classes, challenges, user } = this.props;

        return (
            <div>
                <Button className={classes.button} onClick={() => this.create(true)}>Create Challenge</Button>
                {this.state.showCreateChallengeForm && <CreateChallenge onClick={() => this.create(false)} />}
                {challenges && <ChallengeList challenges={challenges} user={user} />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        challenges: state.challenges.all,
        user: state.auth.user
    }
}


function mapDispatchToProps(dispatch) {
    return {
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));

