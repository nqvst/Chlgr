import React from 'react';
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Challenge from './Challenge.js';
import {acceptChallenge} from '../actions/ChallengeActions.js';
import CreateComment from '../containers/CreateComment.js';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
  },
});

class ChallengeList extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes, challenges, user, accept } = this.props;

    const challengesList = challenges.map((item, index) => {
      console.log('challenge:', {item});
      console.log('user',{user});
      return <Challenge key={index} {...item.value} id={item.key} user={user} onClick={() => {accept(item, user)}}/>
    });

    return (
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="all" />
            <Tab label="mental" />
            <Tab label="physical" />
            <Tab label="social" />
          </Tabs>
        </Paper>
        <ul>
          {challengesList}
        </ul>
        <CreateComment/>
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
      accept: (challenge, user) => {
        const userInfo = {
          userId: user.userId,
          username: user.username
        }
        const acpChallenge = {
          challengeId: challenge.key
        }
        dispatch(acceptChallenge(acpChallenge, userInfo));
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ChallengeList));

