import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import Header from './common/Header'
import { loginUser } from '../redux/actions/userActions'


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Tasks = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header/>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Tasks
            </Typography>
            <Typography>Need API to Add/Delete/Get tasks we can show here in datatable.</Typography>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI
});
const mapActionsToProps = {
  loginUser
};
export default connect(mapStateToProps, mapActionsToProps)(Tasks)