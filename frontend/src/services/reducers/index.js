import {combineReducers} from "redux";
import {authentication} from "./auth";

import {LOGOUT_USER} from "../actions/auth";

const combinedReducers = combineReducers({
    auth: authentication
});

const reducers = (state, action) => {
    if (action.type === LOGOUT_USER) {
        state = undefined;
    }

    return combinedReducers(state, action);
};

export default reducers;
