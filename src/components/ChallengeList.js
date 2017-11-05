import React from 'react';
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import Challenge from './Challenge.js';

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
    const { classes,  challenges} = this.props;

    console.log(`challenges: ${challenges}` )

    const challengesList = challenges.map((item, index) => {
      console.log(item.value);
      return <Challenge key={index} {...item.value} user={this.props.currentUser} onClick={() => {this.acceptChallenge(item)}}/>
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


export default connect(mapStateToProps)(withStyles(styles)(ChallengeList));
