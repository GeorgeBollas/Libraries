import {
    CREATE_LIBRARY_REQUEST,
    CREATE_LIBRARY_SUCCESS,
    CREATE_LIBRARY_DIALOG_OPEN,
    CREATE_LIBRARY_DIALOG_SAVE,
    CREATE_LIBRARY_DIALOG_CANCEL,
} from '../actions/actionTypes';

const initialState = {
    library: { name: "", tags:[] },
    isLibraryCreatorDialogOpen: false,
    isLibraryCreatorSaving: false
};


export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === CREATE_LIBRARY_DIALOG_OPEN) {
        return {
            ...state,
            isLibraryCreatorDialogOpen: true,
        };
    };

    if (action.type === CREATE_LIBRARY_DIALOG_CANCEL) {
        return {
            ...state,
            isLibraryCreatorDialogOpen: false,
        };
    };

    if (action.type === CREATE_LIBRARY_DIALOG_SAVE) {
        return {
            ...state,
            isLibraryCreatorDialogOpen: false,
        };
    };

    if (action.type === CREATE_LIBRARY_REQUEST) {
        return {
            ...state,
            isLibraryCreatorSaving: true,
        };
    };

    if (action.type === CREATE_LIBRARY_SUCCESS) {
        return {
            ...state,
            isLibraryCreatorDialogOpen: false,
            isLibraryCreatorSaving: false,
        };
    };

    return state;
}
