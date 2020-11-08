import {push} from 'connected-react-router';
import axiosApi from "../../axiosApi";

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

const loginUserSuccess = (user) => ({type: LOGIN_USER_SUCCESS, user});
const logoutUserSuccess = () => ({type: LOGOUT_USER_SUCCESS});
const loginUserError = (error) => ({type: LOGIN_USER_ERROR, error});

export const loginUser = (userData) => {
    return async dispatch => {
        try {
            const response = await axiosApi.post('/users/sessions', userData);
            dispatch(loginUserSuccess(response.data));
            if(response.data && response.data.role === 'admin') {
                dispatch(push('/admin'));
            } else {
                dispatch(push('/'));
            }
        } catch (e) {
            console.log(e);
            dispatch(loginUserError(e));
        }
    }
};

export const logoutUser = () => {
    return async (dispatch, getState) => {
        const token = getState().users.user.token;
        const headers = {"Authorization": "Token " + token};

        await axiosApi.delete('/users/sessions', {headers});

        dispatch(logoutUserSuccess());
        dispatch(push('/'));
    }
};
