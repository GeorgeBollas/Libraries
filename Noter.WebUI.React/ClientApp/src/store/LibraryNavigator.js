import {
    FETCH_LIBRARIES_REQUEST,
    FETCH_LIBRARIES_SUCCESS,

    NAVIGATOR_SELECT_LIBRARY,
    NAVIGATOR_SELECT_LIBRARY_MENU
} from '../actions/actionTypes';

const initialState = {
    libraries: undefined,
    selectedLibraryMenuOpen: false,
};


export const reducer = (state, action) => {
    state = state || initialState;

    //console.debug('Library List reducer');


    if (action.type === FETCH_LIBRARIES_REQUEST) {
        return {
            ...state,
            libraries: undefined,
        };
    }

    if (action.type === FETCH_LIBRARIES_SUCCESS) {
        return {
            ...state,
            libraries: action.libVM.libraries, //todo fix this
        };

    };

    if (action.type === NAVIGATOR_SELECT_LIBRARY) {
        return {
            ...state,
            selectedLibraryId: action.libraryId,
            selectedLibraryMenuOpen: false
        };
    };

    if (action.type === NAVIGATOR_SELECT_LIBRARY_MENU) {
        return {
            ...state,
            selectedLibraryId: action.libraryId,
            selectedLibraryMenuOpen: true
        };
    };

    return state;
}
