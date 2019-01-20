import { FETCH_LIBRARIES, FETCH_LIBRARIES_SUCCESS, CREATE_LIBRARY, CREATE_LIBRARY_SUCCESS } from '../actions/Libraries';

const initialState = { libraries: [], isLoading: false, isListValid: false};


export const reducer = (state, action) => {
    state = state || initialState;

    //console.debug('Library List reducer');


    if (action.type === FETCH_LIBRARIES) {
        return {
            ...state,
            libraries: [],
            isListValid: false,
            isLoading: true,
        };
    }

    if (action.type === FETCH_LIBRARIES_SUCCESS) {
        return {
            ...state,
            libraries: action.libVM.libraries, //todo fix this
            isListValid: true,
            isLoading: false,
        };

    };


    if (action.type === CREATE_LIBRARY) {
        return {
            ...state,
            creatingLibrary: true, //to show spinner
        };
    };

    if (action.type === CREATE_LIBRARY_SUCCESS) {
        return {
            ...state,
            creatingLibrary: false, //to show spinner
        };
    };

    return state;
}
