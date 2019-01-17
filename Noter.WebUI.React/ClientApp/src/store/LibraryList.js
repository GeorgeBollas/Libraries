import { REQUEST_LIBRARY_LIST, RECEIVE_LIBRARY_LIST, REQUEST_CREATE_LIBRARY, RECEIVE_CREATE_LIBRARY } from '../constants/action-types';
import axios from 'axios';

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
    },
        createLibrary: () => async (dispatch, getState) => {

        if (!getState().libraries.isLoading)
            return;
        //if (startDateIndex === getState().weatherForecasts.startDateIndex) {
        //    // Don't issue a duplicate request (we already have or are loading the requested data)
        //    return;
        //}

        dispatch({ type: REQUEST_CREATE_LIBRARY });

            const library = {
                name: this.state.name,
                tags: this.state.tags
            };

            axios.post(`http://localhost:63315/api/Libraries`, { library })
                .then(res => {
                    var libVM = res.library
                    dispatch({ type: RECEIVE_CREATE_LIBRARY, libVM });
                    //todo decide what to really do here
                })

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
