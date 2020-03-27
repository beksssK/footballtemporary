import {FETCH_FOOTBALLERS_SUCCESS} from "../actions/footballersActions";

const initialState = {
    allFootballers: [],
};

export const footballersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FOOTBALLERS_SUCCESS:
            return {...state, allFootballers: action.footballers};
        default:
            return state;
    }

};

export default footballersReducer;
