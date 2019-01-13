import { REQUEST_LIBRARY_LIST, RECEIVE_LIBRARY_LIST } from '../constants/action-types';
         
const initialState = { libraries: [], isLoading: true};

export const actionCreators = {
    requestLibraryList: () => async (dispatch, getState) => {

        if (!getState().libraries.isLoading)
            return;
        //if (startDateIndex === getState().weatherForecasts.startDateIndex) {
        //    // Don't issue a duplicate request (we already have or are loading the requested data)
        //    return;
        //}

        dispatch({ type: REQUEST_LIBRARY_LIST});

        const url = `http://localhost:63315/api/Libraries`;
        const response = await fetch(url);
        const libVM = await response.json();

        dispatch({ type: RECEIVE_LIBRARY_LIST, libVM });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === REQUEST_LIBRARY_LIST) {
        return {
            ...state,
            isLoading: true,
        };
    }

    if (action.type === RECEIVE_LIBRARY_LIST) {
        return {
            ...state,
            libraries: action.libVM.libraries, //todo fix this
            isLoading: false,
        };

    };

    return state;
}
