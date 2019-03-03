import {

    FETCH_LIBRARY_REQUEST,
    FETCH_LIBRARY_SUCCESS,
    FETCH_LIBRARY_FAILURE,

} from '../actions/actionTypes';

const initialState = {
    libraryId: 0,
    library: {}
};


export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === FETCH_LIBRARY_REQUEST) {
        return {
            ...state,
            library: {},
        };
    };

    if (action.type === FETCH_LIBRARY_SUCCESS) {
        return {
            ...state,
            library: action.data.library,
        };
    };


    return state;
}
