import {
    LIBRARY_LIST_SELECT_LIBRARY,
    LIBRARY_LIST_SELECT_LIBRARY_MENU,
    LIBRARY_LIST_SET_FILTER_TEXT
} from '../actions/actionTypes';

const initialState = {
    selectedLibraryMenuOpen: false,
    filterText: '',
    selectedLibraryId: 0,
};


export const reducer = (state, action) => {
    state = state || initialState;

    //console.debug('Library List reducer');


    if (action.type === LIBRARY_LIST_SELECT_LIBRARY) {
        return {
            ...state,
            selectedLibraryId: action.libraryId,
        };
    };

    if (action.type === LIBRARY_LIST_SELECT_LIBRARY_MENU) {
        return {
            ...state,
            selectedLibraryId: action.libraryId,
        };
    };


    if (action.type === LIBRARY_LIST_SET_FILTER_TEXT) {
        return {
            ...state,
            filterText: action.filterText,
        };
    };

    return state;
}
