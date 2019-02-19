import {
    LIBRARY_LIST_SELECT_LIBRARY,
    LIBRARY_LIST_SELECT_LIBRARY_MENU,
    LIBRARY_LIST_SET_FILTER_TEXT,
    CREATE_LIBRARY_DIALOG_OPEN,
    CREATE_LIBRARY_DIALOG_CLOSED
} from '../actions/actionTypes';

const initialState = {
    selectedLibraryMenuOpen: false, //todo rename add 'is' 
    filterText: '',
    selectedLibraryId: 0,
    isCreateLibraryDialogOpen: false
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

    if (action.type === CREATE_LIBRARY_DIALOG_OPEN) {
        return {
            ...state,
            isCreateLibraryDialogOpen: true,
        };
    };

    if (action.type === CREATE_LIBRARY_DIALOG_CLOSED) {
        return {
            ...state,
            isCreateLibraryDialogOpen: false,
        };
    };

    return state;
}
