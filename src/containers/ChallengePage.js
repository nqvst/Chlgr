import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import toArray from '../util/toArray.js';
import { acceptChallenge } from '../actions/ChallengeActions.js';
import { CircularProgress } from 'material-ui/Progress';
import CreateComment from '../containers/CreateComment.js';
import { fetchSingleChallenge } from '../firebase/FirebaseConnect';

const styles = theme => ({
    card: {
        minWidth: 275,
        marginBottom: '16px',
    },
    avatar: {
        margin: 10,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    actions: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    category: {
        backgroundColor: '#74ccb4',
        colro: 'white',
        width: '5rem',
        marginTop: '1rem',
        marginLeft: '-20px',
        marginTop: '-10px',
        padding: '4px',
        textAlign: 'center',

    }
});

class ChallengePage extends Component {

    componentDidMount() {
        const { match: { params }, fetchCurrentChallenge } = this.props;
        fetchSingleChallenge(params.id, fetchCurrentChallenge);
    }

    render() {

        const { match: { params }, challenge, classes, accept, user } = this.props;

        let accepted = false;
        if (user) {
            accepted = toArray(challenge.acceptedBy).find((accepted) => {
                if (accepted.userId === user.userId) {
                    return true;
                } else {
                    return false;
                }
            })
        }

        return (
            <div>
                {!challenge ?
                    <CircularProgress className={classes.progress} size={50} /> :
                    <div>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <div className={classes.category}>
                                    {challenge.category}
                                </div>
                                {challenge.createdBy.image ?
                                    <Avatar className={classes.avatar} src={challenge.createdBy.image} alt={challenge.createdBy} /> :
                                    <Avatar className={classes.avatar}>{challenge.createdBy[0]}</Avatar>
                                }
                                <Typography type="headline" component="h2">
                                    {challenge.heading}
                                </Typography>
                                {challenge.category}
                                <Typography type="body1" className={classes.title}>
                                    {challenge.description}
                                </Typography>

                            </CardContent>
                            <CardActions className={classes.actions}>

                                { challenge.endDateString &&
                                    <p>
                                        end date: {challenge.endDateString}
                                    </p>
                                }
                                <p>
                                    acceptedBy: {toArray(challenge.acceptedBy).length}
                                </p>
                                {!accepted && user &&
                                    <Button color="primary" onClick={() => { accept(challenge, user) }}> Accept</Button>
                                }
                                {accepted && user &&
                                    <p>Accepted</p>
                                }
                            </CardActions>
                        </Card>
                        <CreateComment challengeId={params.id}/>
                        {challenge.comments &&
                            toArray(challenge.comments).map((item) => {
                                return <div>{item.comment}</div>
                            })}
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        challenge: state.challenges.current,
        user: state.auth.user,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        accept: (challenge, user) => {
            const userInfo = {
                userId: user.userId,
                username: user.username
            }
            const acpChallenge = {
                challengeId: challenge.id
            }
            dispatch(acceptChallenge(acpChallenge, userInfo));
        },
        fetchCurrentChallenge: (challenge) => {
            dispatch({
                type: 'SET_CURRENT_CHALLENGE',
                payload: challenge,
            });
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ChallengePage));
