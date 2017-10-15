import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import { Link } from 'react-router-dom'


const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});


function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>

            <Typography type="title" color="inherit" className={classes.flex}>
                Challenger
            </Typography>

            <Button component={Link} to={'/signup'} color="contrast">SignUp</Button>
            <Button component={Link} to={'/login'} color="contrast">Login</Button>

          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default withStyles(styles)(ButtonAppBar);