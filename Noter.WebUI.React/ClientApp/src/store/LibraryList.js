import { REQUEST_LIBRARY_LIST, RECEIVE_LIBRARY_LIST } from '../constants/action-types';
         
const initialState = { libraries: [], isLoading: false };

export const actionCreators = {
    requestLibraryList: () => async (dispatch, getState) => {

        //TODO do we need this????

        //if (startDateIndex === getState().weatherForecasts.startDateIndex) {
        //    // Don't issue a duplicate request (we already have or are loading the requested data)
        //    return;
        //}

        dispatch({ type: REQUEST_LIBRARY_LIST});

        const url = `http://localhost:63315/api/Libraries`;
        const response = await fetch(url);
        const libraries = await response.json();

        dispatch({ type: RECEIVE_LIBRARY_LIST, libraries });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === REQUEST_LIBRARY_LIST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === RECEIVE_LIBRARY_LIST) {
        return {
            ...state,
            libraries: action.libraries,
            isLoading: false
        };

    };

    return state;
}
