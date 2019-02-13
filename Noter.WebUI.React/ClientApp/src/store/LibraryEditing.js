import {

    UPDATE_LIBRARY_REQUEST,
    UPDATE_LIBRARY_SUCCESS,
    UPDATE_LIBRARY_DIALOG_OPEN,
    UPDATE_LIBRARY_DIALOG_SAVE,
    UPDATE_LIBRARY_DIALOG_CANCEL,

} from '../actions/actionTypes';

const initialState = {
    libraryId: 0,
    isLibraryEditorDialogOpen: false,
    isLibraryEditorSaving: false
};


export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === UPDATE_LIBRARY_DIALOG_OPEN) {
        return {
            ...state,
            isLibraryEditorDialogOpen: true,
        };
    };

    if (action.type === UPDATE_LIBRARY_DIALOG_CANCEL) {
        return {
            ...state,
            isLibraryEditorDialogOpen: false,
        };
    };

    if (action.type === UPDATE_LIBRARY_DIALOG_SAVE) {
        return {
            ...state,
            isLibraryEditorDialogOpen: false,
        };
    };

    if (action.type === UPDATE_LIBRARY_REQUEST) {
        return {
            ...state,
            isLibraryEditorSaving: true,
        };
    };

    if (action.type === UPDATE_LIBRARY_SUCCESS) {
        return {
            ...state,
            isLibraryEditorSaving: false,
            isLibraryEditorDialogOpen: false,
        };
    };

    return state;
}
