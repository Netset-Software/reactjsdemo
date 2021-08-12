import React, { useState, useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions'

function Login(props: any) {
    const [values, setValues] = useState({username: "testuser", password: "Test@123456"} as any);
    const [errors, setErrors] = useState({} as any);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (props.UI.errors) {
            setErrors(props.UI.errors);
        }
        setLoading(props.UI.loading);
    }, [props.UI])
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        if(validateForm()) {
            const userData = {
                username: values.username,
                password: values.password,
            };
            props.loginUser(userData, props.history);
        }
    }
    const handleChange = (e: any) => {
        e.persist();
        setValues((values: any) => ({
            ...values,
            [e.target.name]: e.target.value
            })
        );
    };

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const validateForm = () => {

        let formIsValid = true;
        setErrors({password: "", username: ""});
  
        if(values.username == "" || values.password == "") {
            formIsValid = false;
            setErrors({password: (values.password == "") ? "Pleas enter password." : "", username: (values.username == "") ? "Pleas enter username." : ""});
        } else if (typeof values.username !== "undefined") {
            console.info('------', values)
          if (!values.username.match(/^[a-zA-Z]*$/)) {
            formIsValid = false;
            setErrors({username: "Please enter alphabet characters only without space."});
          }
        }
  
        if (values.password == "") {
          formIsValid = false;
          setErrors({password: "Please enter your password."});
        } else if (values.password.length < 8) {
            formIsValid = false;
            setErrors({password: "Password should be atleast 8 digits long."});
        } else if (typeof values.password !== "undefined") {
          if (!values.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            setErrors({password: "Please enter alphanumeric with special character password."});
          }
        }
        setLoading(false);
        return formIsValid;
  
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>

                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={values.username}
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        type="text"
                        onChange={handleChange}
                        helperText={errors.username}
                        error={errors.username ? true : false}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        value={values.password}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        onChange={handleChange}
                        helperText={errors.password}
                        error={errors.password ? true : false}
                    />
                    {errors.message && (
                        <Typography variant="body2">
                        {errors.message}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        onClick={handleSubmit}
                        className={classes.submit}
                    >
                    Sign In {loading && (<CircularProgress size={30} color="secondary" />)}
                    </Button>
                </form>
            </div>
        </Container>
    )
}


const mapStateToProps = (state: any) => ({
    user: state.user,
    UI: state.UI
});
const mapActionsToProps = {
    loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(Login)