import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles'
import { Button } from 'material-ui';
import CreateChallenge from './CreateChallenge.js';
import ChallengeList from '../components/ChallengeList.js';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });


class Home extends Component {
    state = {
        showCreateChallengeForm: false,
    }

    create = (value) => {
        this.setState({showCreateChallengeForm: value})
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Button className={classes.button} onClick={() => this.create(true)}>Create Challenge</Button>
                {this.state.showCreateChallengeForm && <CreateChallenge onClick={() => this.create(false)}/>}
                <ChallengeList/>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
//export default Home;
