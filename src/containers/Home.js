import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  root: {
    backgroundColor: '222',
  },
};

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        Home
      </div>
    );
  }
}

export default injectSheet(styles)(Home);
