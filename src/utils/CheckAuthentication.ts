import { logoutUser, getUserData } from '../redux/actions/userActions'
import store from '../redux/stores';
import { SET_AUTHENTICATED } from '../redux/types'
import { authToken } from '../redux/actions/userActions'

export const CheckAuthentication = () => {
    const auth_token = localStorage.token;
    if (auth_token) {
        if (auth_token == authToken) {
            store.dispatch({ type: SET_AUTHENTICATED });
            store.dispatch(getUserData());
        } else {
            store.dispatch(logoutUser());
        }
    }
}