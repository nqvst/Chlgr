import React from 'react';
import { connect } from "react-redux";
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
  const { classes, authenticated, user } = props;

  console.log(authenticated);
  console.log(user);
 
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

          { !authenticated &&
          <Button component={Link} to={'/login'} color="contrast">Login</Button>
          }
          { user &&
            <p>{user.username}</p>
          }
          { authenticated &&
            <Button component={Link} to={'/logout'} color="contrast">Logout</Button>
          }
          { !authenticated &&
            <Button component={Link} to={'/register'} color="contrast">Register</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(withStyles(styles)(ButtonAppBar));

