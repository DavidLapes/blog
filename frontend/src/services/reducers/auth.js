import {auth} from "../actions/index";

function isAuthenticated() {
    let currentUser = JSON.parse(localStorage.getItem("user"));
    return currentUser !== null && currentUser.token !== null;
}

const initialAuthenticationState = {
    isAuthenticated: isAuthenticated(),
    isFetching: false
};

export function authentication(state = initialAuthenticationState, action) {
    switch (action.type) {
        case auth.LOGIN_USER_SAVE_TOKEN:
            localStorage.setItem("user", JSON.stringify(action.token));
            return state;
        case auth.LOGIN_USER_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case auth.LOGIN_USER_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true
            };
        case auth.LOGIN_USER_FETCH_ERROR:
            return {
                ...state,
                isFetching: false
            };
        case auth.LOGOUT_USER_REMOVE_TOKEN:
            localStorage.removeItem("user");
            return state;
        case auth.LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
}
