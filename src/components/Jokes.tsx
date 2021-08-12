import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import Header from './common/Header'
import axios from 'axios';
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

const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('https://official-joke-api.appspot.com/jokes/ten')
    .then((result: any) => {
      console.info('JOKES: ', result);
      if(result.data) {
        setJokes(result.data);
      }
    }).catch((e: any) => {
      console.error(e)
    })
  },[])

  const classes = useStyles();
  return (
    <React.Fragment>
      <Header/>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Jokes
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {jokes.map((joke:any) => (
              <Grid item key={joke} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {joke.type.toUpperCase()}
                    </Typography>
                    <Typography>
                    {joke.setup}
                    </Typography>
                    <Typography>
                    <strong>"{joke.punchline}"</strong>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
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
export default connect(mapStateToProps, mapActionsToProps)(Jokes)