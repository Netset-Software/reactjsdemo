import React from 'react';
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
}));

const Index = (props: any) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header/>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Welcome {props.user.username}
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          
        </Container>
      </main>
    </React.Fragment>
  );
}

const select = (appState: any) => ({
  user: appState.user
})

const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI
});
const mapActionsToProps = {
  loginUser
};
export default connect(mapStateToProps, mapActionsToProps)(Index)
