import {push} from 'connected-react-router';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

const loginUserSuccess = (user) => ({type: LOGIN_USER_SUCCESS, user});
const logoutUserSuccess = () => ({type: LOGOUT_USER_SUCCESS});
const loginUserError = (error) => ({type: LOGIN_USER_ERROR, error});

const tempChecker = {userName: 'allen', password: 'allenhnbm'};

export const loginUser = (userData) => {
    return async dispatch => {
        try {
            if (userData.userName === tempChecker.userName && userData.password === tempChecker.password){
                dispatch(loginUserSuccess({userName: userData.userName, password: userData.password, role: 'admin'}));
                dispatch(push('/admin'));
            } else {
                dispatch(loginUserError({message: 'Wrong password or username'}))
            }
        } catch (e) {
            console.log(e);
        }
    }
};

export const logoutUser = () => {
    return async dispatch => {
        dispatch(logoutUserSuccess());
        dispatch(push('/'));
    }
};
