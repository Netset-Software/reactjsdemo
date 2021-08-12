import { SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER } from '../types'
import axios from 'axios';

const userAuth = {
    username: 'testuser',
    password: 'Test@123456'
}
const userDetails = {
    name: 'John',
    username: 'testuser',
    email: 'test@example.com',
    phone: '+919658985655',
}

export const authToken = 'Bearer 2af549dfg5fgdfklpcxv98xc4b9mk0jk0ew0we7-copdfij9suhdf_test_token';

export const loginUser = (userData: any, history: any) => (dispatch: any) => {
    dispatch({ type: LOADING_UI })
    if(userData.username == userAuth.username && userData.password == userAuth.password) {
        localStorage.setItem('token', authToken);
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        console.log('success');
        history.push('/');
    } else {
        console.log('Wrong credentials');
        dispatch({
        type: SET_ERRORS,
        payload: {username: (userData.username == userAuth.username) ? '' : 'You have entered wrong username.', password: (userData.password == userAuth.password) ? '' : 'You have entered wrong password'}});
    }
}


export const getUserData = () => (dispatch: any) => {
    dispatch({ type: LOADING_USER });
    dispatch({
        type: SET_USER,
        payload: userDetails
    });
}

export const logoutUser = () => (dispatch: any) => {
    localStorage.removeItem('token');
    dispatch({
        type: SET_UNAUTHENTICATED
    });
    window.location.href = '/login';
};