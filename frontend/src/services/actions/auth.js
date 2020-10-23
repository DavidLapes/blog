import axios from "axios";
import {LOGIN_URL} from "../../commons/apiCommons";

export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_REMOVE_TOKEN = "LOGOUT_USER_REMOVE_TOKEN";

export const LOGIN_USER_FETCH_REQUEST = "LOGIN_USER_FETCH_REQUEST";
export const LOGIN_USER_FETCH_SUCCESS = "LOGIN_USER_FETCH_SUCCESS";
export const LOGIN_USER_FETCH_ERROR = "LOGIN_USER_FETCH_ERROR";
export const LOGIN_USER_SAVE_TOKEN = "LOGIN_USER_SAVE_TOKEN";

export const login = user => (dispatch, getState) => {
    if (shouldLogin(getState())) {
        return dispatch(fetchLogin(user));
    }
};

const shouldLogin = (state) => {
    const authStatus = state.auth;
    return !authStatus.isAuthenticated;
};

const fetchLogin = user => dispatch => {
    dispatch(requestLogin());
    return axios.post(LOGIN_URL, user)
        .then(json => dispatch(saveToken(json.data)))
        .then(() => dispatch(loginSuccess()))
        .catch(err => dispatch(loginError(err)))
};

const requestLogin = () => ({
    type: LOGIN_USER_FETCH_REQUEST
});

const loginSuccess = () => ({
    type: LOGIN_USER_FETCH_SUCCESS
});

const loginError = message => ({
    type: LOGIN_USER_FETCH_ERROR,
    message: message
});

const saveToken = token => ({
    type: LOGIN_USER_SAVE_TOKEN,
    token: token
});

export const logout = () => dispatch => {
    dispatch(removeToken());
    dispatch(logoutUser());
};

const logoutUser = () => ({
    type: LOGOUT_USER
});

const removeToken = () => ({
    type: LOGOUT_USER_REMOVE_TOKEN
});
