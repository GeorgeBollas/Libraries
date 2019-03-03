import {
    LIBRARY_LIST_SELECT_LIBRARY,
    LIBRARY_LIST_SELECT_LIBRARY_MENU,
    LIBRARY_LIST_SET_FILTER_TEXT,
    SET_CREATE_LIBRARY_DIALOG_OPEN_STATUS
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
            selectedLibraryId: action.data,
        };
    };

    if (action.type === LIBRARY_LIST_SELECT_LIBRARY_MENU) {
        return {
            ...state,
            selectedLibraryId: action.data,
        };
    };


    if (action.type === LIBRARY_LIST_SET_FILTER_TEXT) {
        return {
            ...state,
            filterText: action.data,
        };
    };

    if (action.type === SET_CREATE_LIBRARY_DIALOG_OPEN_STATUS) {
        return {
            ...state,
            isCreateLibraryDialogOpen: action.data,
        };
    };

    return state;
}
