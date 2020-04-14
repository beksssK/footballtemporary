import {LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS} from "../actions/usersActions";

const initialState = {
    user: null,
    error: null
};

const usersReducer = (state = initialState, action) => {
    if (action.type === LOGIN_USER_SUCCESS) {
        return {...state, user: action.user, error: null}
    } else if (action.type === LOGIN_USER_ERROR) {
        return {...state, error: action.error}
    } else if (action.type === LOGOUT_USER_SUCCESS) {
        return {...state, error: null, user: null}
    }
    return state;
};

export default usersReducer;
