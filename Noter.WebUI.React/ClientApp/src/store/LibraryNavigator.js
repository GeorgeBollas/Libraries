import {
    FETCH_LIBRARIES_REQUEST,
    FETCH_LIBRARIES_SUCCESS,
    CREATE_LIBRARY_DIALOG_OPEN,
    CREATE_LIBRARY_REQUEST,
    CREATE_LIBRARY_SUCCESS,
    CREATE_LIBRARY_DIALOG_SAVE,
    CREATE_LIBRARY_DIALOG_CANCEL
} from '../actions/LibraryNavigator';

const initialState = {
    libraries: [],
    selectedLibraryId: 0,
    isLibraryListLoading: false,
    isListValid: false,
    isCreateLibraryDialogOpen: false,
    isCreateLibraryRequested : false
};


export const reducer = (state, action) => {
    state = state || initialState;

    //console.debug('Library List reducer');


    if (action.type === FETCH_LIBRARIES_REQUEST) {
        return {
            ...state,
            libraries: [],
            isListValid: false,
            isLibraryListLoading: true,
        };
    }

    if (action.type === FETCH_LIBRARIES_SUCCESS) {
        return {
            ...state,
            libraries: action.libVM.libraries, //todo fix this
            isListValid: true,
            isLibraryListLoading: false,
        };

    };

    //todo fetch libraries failed

    if (action.type === CREATE_LIBRARY_DIALOG_OPEN) {
        return {
            ...state,
            isCreateLibraryDialogOpen: true,
        };
    };

    if (action.type === CREATE_LIBRARY_DIALOG_CANCEL) {
        return {
            ...state,
            isCreateLibraryDialogOpen: false,
        };
    };

    if (action.type === CREATE_LIBRARY_DIALOG_SAVE) {
        return {
            ...state,
            isCreateLibraryDialogOpen: false,
        };
    };

    if (action.type === CREATE_LIBRARY_REQUEST) {
        return {
            ...state,
            isCreateLibraryRequested: true,
        };
    };

    if (action.type === CREATE_LIBRARY_SUCCESS) {
        return {
            ...state,
            isCreateLibraryRequested: false,
            isCreateLibraryDialogOpen: false,
        };
    };


    return state;
}
