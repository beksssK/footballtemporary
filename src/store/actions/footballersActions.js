import axiosApi from "../../axiosApi";
import {push} from 'connected-react-router';

export const FETCH_FOOTBALLERS_REQUEST = 'FETCH_FOOTBALLER_REQUEST';
export const FETCH_FOOTBALLERS_SUCCESS = 'FETCH_FOOTBALLERS_SUCCESS';
export const FETCH_FOOTBALLERS_ERROR = 'FETCH_FOOTBALLERS_ERROR';

export const DELETE_FOOTBALLER_REQUEST = 'DELETE_FOOTBALLER_REQUEST';
export const DELETE_FOOTBALLER_SUCCESS = 'DELETE_FOOTBALLER_SUCCESS';
export const DELETE_FOOTBALLER_ERROR = 'DELETE_FOOTBALLER_ERROR';

export const FETCH_SINGLE_FOOTBALLER_SUCCESS = 'FETCH_SINGLE_FOOTBALLER_SUCCESS';

export const DELETE_FOOTBALLERS_GALLERY_PHOTO_REQUEST = 'DELETE_FOOTBALLERS_GALLERY_PHOTO_REQUEST';
export const DELETE_FOOTBALLERS_GALLERY_PHOTO_SUCCESS = 'DELETE_FOOTBALLERS_GALLERY_PHOTO_SUCCESS';
export const DELETE_FOOTBALLERS_GALLERY_PHOTO_ERROR = 'DELETE_FOOTBALLERS_GALLERY_PHOTO_ERROR';


const fetchFootballersRequest = () => ({type: FETCH_FOOTBALLERS_REQUEST});
const fetchFootballersSuccess = (footballers) => ({type: FETCH_FOOTBALLERS_SUCCESS, footballers});
const fetchFootballersError = error => ({type: FETCH_FOOTBALLERS_ERROR, error});

const deleteFootballerSuccess= () => ({type: DELETE_FOOTBALLER_SUCCESS});

const fetchSingleFootballerSuccess = (singleFootballer) => ({type: FETCH_SINGLE_FOOTBALLER_SUCCESS, singleFootballer});

const deleteFootballersGalleryPhotoSuccess = () => ({type: DELETE_FOOTBALLER_SUCCESS});


export const fetchFootballers = () => {
    return async dispatch => {
        try{
            dispatch(fetchFootballersRequest());
            const response = await axiosApi.get('/footballers');
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
            const response = await axiosApi.get('/footballers/' + footballerId);
            dispatch(fetchSingleFootballerSuccess(response.data));
        } catch (e){
            console.error(e);
        }
    }
};


export const deleteFootballer = (footballerId) => {
    return async dispatch => {
        try {
            dispatch(deleteFootballerSuccess());
            await axiosApi.delete('/footballers/' + footballerId);
            dispatch(push('/players'));
        } catch (e) {
            console.error(e);
        }
    }
};


export const deleteFootballersGallery = (footballerId, filenames) => {
    return async dispatch => {
        try {
            await axiosApi.put('/footballers/galleryPhoto/' + footballerId, {filenames});
            dispatch(deleteFootballersGalleryPhotoSuccess());
            dispatch(push('/players'));
        } catch (e) {
            console.error(e);
        }
    }
};
