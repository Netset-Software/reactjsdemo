import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { logoutUser } from '../../redux/actions/userActions'
import store from '../../redux/stores';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
      color: 'inherit',
      textDecoration: 'none',
      fontSize: '14px',
      margin: '5px 10px'
  }
}));


const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography align="left" variant="h6" color="inherit" className={classes.title} noWrap>
            Dashboard
          </Typography>
          <Link to="/" className={classes.link}>DASHBOARD</Link>
          <Link to="tasks" className={classes.link}>TASKS</Link>
          <Link to="jokes" className={classes.link}>JOKES</Link>
          <Button color="inherit" onClick={() => store.dispatch(logoutUser())}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const select = (appState: any) => ({
  user: appState.user,
  UI: appState.UI
})

export default connect(select)(Header)