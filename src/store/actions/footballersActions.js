import axiosApi from "../../axiosApi";
import {push} from 'connected-react-router';

export const FETCH_FOOTBALLERS_REQUEST = 'FETCH_FOOTBALLER_REQUEST';
export const FETCH_FOOTBALLERS_SUCCESS = 'FETCH_FOOTBALLERS_SUCCESS';
export const FETCH_FOOTBALLERS_ERROR = 'FETCH_FOOTBALLERS_ERROR';

export const DELETE_FOOTBALLERS_REQUEST = 'DELETE_FOOTBALLERS_REQUEST';
export const DELETE_FOOTBALLERS_SUCCESS = 'DELETE_FOOTBALLERS_SUCCESS';
export const DELETE_FOOTBALLERS_ERROR = 'DELETE_FOOTBALLERS_ERROR';


export const FETCH_SINGLE_FOOTBALLER_SUCCESS = 'FETCH_SINGLE_FOOTBALLER_SUCCESS';

const fetchFootballersRequest = () => ({type: FETCH_FOOTBALLERS_REQUEST});
const fetchFootballersSuccess = (footballers) => ({type: FETCH_FOOTBALLERS_SUCCESS, footballers});
const fetchFootballersError = error => ({type: FETCH_FOOTBALLERS_ERROR, error});

const deleteFootballersSuccess= () => ({type: DELETE_FOOTBALLERS_SUCCESS});

const fetchSingleFootballerSuccess = (singleFootballer) => ({type: FETCH_SINGLE_FOOTBALLER_SUCCESS, singleFootballer});

export const fetchFootballers = () => {
    return async dispatch => {
        try{
            dispatch(fetchFootballersRequest());
            const response = await axiosApi.get('/sportsmen');
            dispatch(fetchFootballersSuccess(response.data));
        } catch (e){
            console.log(e);
            dispatch(fetchFootballersError(e));
        }
    }
};

export const fetchSingleFootballer = (footballerId) => {
    return async dispatch => {
        try {
            const response = await axiosApi.get('/sportsmen/' + footballerId);
            dispatch(fetchSingleFootballerSuccess(response.data));
        } catch (e){
            console.error(e);
        }
    }
};


export const deleteFootballers = (footballerId) => {
    return async dispatch => {
        try {
            dispatch(deleteFootballersSuccess());
            await axiosApi.delete('/sportsmen/' + footballerId);
            dispatch(push('/'));
        } catch (e) {
            console.error(e);
        }
    }
};
