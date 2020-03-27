import {FETCH_FOOTBALLERS_SUCCESS, FETCH_SINGLE_FOOTBALLER_SUCCESS} from "../actions/footballersActions";

const initialState = {
    allFootballers: [],
    singleFootballer: null,
};

export const footballersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FOOTBALLERS_SUCCESS:
            return {...state, allFootballers: action.footballers};
        case FETCH_SINGLE_FOOTBALLER_SUCCESS:
            return {...state, singleFootballer: action.singleFootballer};
        default:
            return state;
    }

};

export default footballersReducer;
